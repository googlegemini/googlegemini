import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { constants as fsConstants } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { Resvg } from '@resvg/resvg-js'
import { compileTemplate, parse } from '@vue/compiler-sfc'
import satori from 'satori'
import { html } from 'satori-html'
import * as Vue from 'vue'
import { renderToString } from 'vue/server-renderer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const templatePath = resolve(rootDir, 'og/template.vue')
const publicDir = resolve(rootDir, 'public')
const faviconPath = resolve(publicDir, 'favicon.svg')
const ogDir = resolve(rootDir, 'og')
const claudeAvatarPath = resolve(ogDir, 'claude.png')
const codexAvatarPath = resolve(ogDir, 'codex.png')
const cacheDir = resolve(rootDir, 'node_modules/.cache/gemini-og')
const tempRenderModulePath = resolve(cacheDir, 'template-render.mjs')
const outputSvg = resolve(publicDir, 'og.svg')
const outputPng = resolve(publicDir, 'og.png')

const fontCandidates = {
	regular: [
		'/System/Library/Fonts/Supplemental/Arial.ttf',
		'/System/Library/Fonts/Helvetica.ttc',
		'/System/Library/Fonts/SFNS.ttf',
		'/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
		'/usr/share/fonts/TTF/DejaVuSans.ttf',
	],
	bold: [
		'/System/Library/Fonts/Supplemental/Arial Bold.ttf',
		'/System/Library/Fonts/HelveticaNeue.ttc',
		'/System/Library/Fonts/SFNS.ttf',
		'/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
		'/usr/share/fonts/TTF/DejaVuSans-Bold.ttf',
	],
}

const GOOGLE_FONTS_CSS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'

async function fetchGoogleFont(weight) {
	const res = await fetch(GOOGLE_FONTS_CSS, {
		headers: {
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
	})
	const css = await res.text()
	const weightStr = weight === 700 ? '700' : '400'
	const regex = new RegExp(
		`@font-face\\s*\\{[^}]*font-weight:\\s*${weightStr}[^}]*src:\\s*url\\(([^)]+)\\)[^}]*unicode-range:\\s*U\\+0000-00FF`,
		's',
	)
	const match = css.match(regex)
	if (!match) throw new Error(`Could not find Google Font for weight ${weightStr}`)
	const fontRes = await fetch(match[1])
	return Buffer.from(await fontRes.arrayBuffer())
}

async function resolveFontPath(candidates) {
	for (const path of candidates) {
		try {
			await access(path, fsConstants.R_OK)
			return path
		} catch {
			continue
		}
	}
	return null
}

function decodeHtmlEntities(value) {
	return value
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&amp;', '&')
		.replaceAll('&quot;', '"')
		.replaceAll('&#39;', "'")
		.replaceAll('&nbsp;', '\u00A0')
}

async function main() {
	const source = await readFile(templatePath, 'utf8')
	const faviconSvg = await readFile(faviconPath, 'utf8')
	const [claudeAvatar, codexAvatar] = await Promise.all([
		readFile(claudeAvatarPath),
		readFile(codexAvatarPath),
	])
	const faviconPng = new Resvg(faviconSvg, {
		fitTo: {
			mode: 'width',
			value: 168,
		},
	}).render()
	const regularFontPath = await resolveFontPath(fontCandidates.regular)
	const boldFontPath = await resolveFontPath(fontCandidates.bold)
	let regularFont, boldFont
	if (regularFontPath && boldFontPath) {
		;[regularFont, boldFont] = await Promise.all([
			readFile(regularFontPath),
			readFile(boldFontPath),
		])
	} else {
		console.info('Local fonts not found, downloading from Google Fonts...')
		;[regularFont, boldFont] = await Promise.all([fetchGoogleFont(400), fetchGoogleFont(700)])
	}
	const { descriptor } = parse(source, { filename: templatePath })

	if (!descriptor.template) {
		throw new Error(`No <template> block found in ${templatePath}`)
	}

	const compiled = compileTemplate({
		filename: templatePath,
		id: 'gemini-og-template',
		source: descriptor.template.content,
	})

	if (compiled.errors.length > 0) {
		throw new Error(compiled.errors.map((error) => String(error)).join('\n'))
	}

	await mkdir(cacheDir, { recursive: true })
	await writeFile(tempRenderModulePath, compiled.code)

	const { render } = await import(`${pathToFileURL(tempRenderModulePath).href}?t=${Date.now()}`)
	const app = Vue.createSSRApp({
		data() {
			return {
				title: 'Gemini for GitHub',
				subtitle: 'The missing Gemini co-author for your Git history.',
				coAuthorLine: 'Co-Authored-By: Gemini <gemini@gogle.cc>',
				faviconSrc: `data:image/png;base64,${faviconPng.asPng().toString('base64')}`,
				claudeAvatarSrc: `data:image/png;base64,${claudeAvatar.toString('base64')}`,
				codexAvatarSrc: `data:image/png;base64,${codexAvatar.toString('base64')}`,
				url: 'gemini.gogle.cc',
			}
		},
		render,
	})
	const markup = decodeHtmlEntities(await renderToString(app))
	const svg = await satori(html(markup), {
		width: 1200,
		height: 630,
		fonts: [
			{ name: 'Inter', data: regularFont, weight: 400, style: 'normal' },
			{ name: 'Inter', data: boldFont, weight: 700, style: 'normal' },
		],
	})

	const png = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200,
		},
	}).render()

	await mkdir(publicDir, { recursive: true })
	await Promise.all([writeFile(outputSvg, svg), writeFile(outputPng, png.asPng())])

	console.info(`Generated ${outputPng}`)
}

await main()
