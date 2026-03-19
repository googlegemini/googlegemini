import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

async function prerender() {
	const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
	const { render } = await import(resolve(root, 'dist-server/render.js'))
	const appHtml = await render()
	const html = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
	writeFileSync(resolve(root, 'dist/index.html'), html)
	rmSync(resolve(root, 'dist-server'), { recursive: true, force: true })
	console.info('Pre-rendered dist/index.html')
}

await prerender()
