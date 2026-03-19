<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
	coAuthorPrefix: string
	coAuthorIdentity: string
	coAuthorLine: string
	repoUrl: string
}>()

const copied = ref(false)
const copyFailed = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | null = null

function scheduleReset() {
	if (copiedTimer) {
		clearTimeout(copiedTimer)
	}
	copiedTimer = setTimeout(() => {
		copied.value = false
		copyFailed.value = false
		copiedTimer = null
	}, 2000)
}

function fallbackCopy(line: string) {
	const textarea = document.createElement('textarea')
	textarea.value = line
	textarea.setAttribute('readonly', '')
	textarea.style.position = 'absolute'
	textarea.style.left = '-9999px'
	document.body.appendChild(textarea)
	textarea.select()
	textarea.setSelectionRange(0, textarea.value.length)
	const copiedWithExec = document.execCommand('copy')
	document.body.removeChild(textarea)
	return copiedWithExec
}

async function copy(line: string) {
	try {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(line)
		} else if (!fallbackCopy(line)) {
			throw new Error('Clipboard API unavailable')
		}
		copied.value = true
		copyFailed.value = false
	} catch {
		copied.value = fallbackCopy(line)
		copyFailed.value = !copied.value
	}
	scheduleReset()
}
</script>

<template>
	<section
		class="flex min-h-[calc(100svh-4px)] flex-col items-center justify-center py-10 text-center sm:py-12"
	>
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
			<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
				>Gemini</span
			>
			for GitHub
		</h1>
		<p class="text-muted mt-4 text-[15px] leading-relaxed sm:text-lg md:text-xl">
			Bring the power of Gemini to your commit history.
		</p>

		<button
			type="button"
			class="group hover:border-g-blue mt-8 flex w-full cursor-pointer flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-4 text-left font-mono text-[11px] transition-colors sm:mt-10 sm:px-5 sm:py-5 sm:text-sm md:px-7 md:text-base"
			@click="copy(coAuthorLine)"
		>
			<code class="text-text w-full overflow-x-auto leading-relaxed whitespace-nowrap">
				{{ coAuthorLine }}
			</code>
			<span
				class="font-sans text-xs font-medium transition-colors sm:self-end"
				:class="copied ? 'text-g-green' : copyFailed ? 'text-g-red' : 'text-g-blue'"
			>
				<template v-if="copied">Copied!</template>
				<template v-else-if="copyFailed">Press and hold to copy</template>
				<template v-else>
					<span class="sm:hidden">Tap to copy</span>
					<span class="hidden sm:inline">Click to copy</span>
				</template>
			</span>
		</button>

		<a
			class="text-g-blue mt-4 text-sm font-medium transition-opacity hover:opacity-75 md:mt-6 md:text-base"
			:href="repoUrl"
			target="_blank"
			rel="noopener"
		>
			View on GitHub &rarr;
		</a>
	</section>
</template>
