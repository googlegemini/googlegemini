<script setup lang="ts">
import { ref } from 'vue'

const copied = ref(false)
const coAuthorLine = 'Co-Authored-By: Gemini <gemini@gogle.cc>'

function copy() {
	navigator.clipboard.writeText(coAuthorLine)
	copied.value = true
	setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
	<!-- Google 4-color stripe -->
	<div
		class="from-g-blue via-g-red via-g-yellow to-g-green h-1 bg-linear-to-r from-25% via-50%"
		aria-hidden="true"
	></div>

	<main class="mx-auto max-w-[680px] px-5 md:px-6">
		<!-- Hero -->
		<section
			class="flex min-h-[calc(100vh-4px)] flex-col items-center justify-center py-12 text-center"
		>
			<h1 class="text-4xl font-bold tracking-tight md:text-5xl">
				<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
					>Gemini</span
				>
				for GitHub
			</h1>
			<p class="text-muted mt-4 text-lg md:text-xl">
				Bring the power of Gemini to your commit history.
			</p>

			<div
				class="hover:border-g-blue mt-10 flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-100 px-5 py-5 text-left font-mono text-sm transition-colors md:px-7 md:text-base"
				@click="copy"
			>
				<code>{{ coAuthorLine }}</code>
				<span
					class="shrink-0 font-sans text-xs transition-colors"
					:class="copied ? 'text-g-green' : 'text-faint group-hover:text-g-blue'"
				>
					{{ copied ? 'Copied!' : 'Click to copy' }}
				</span>
			</div>

			<a
				class="text-g-blue mt-6 text-sm font-medium transition-opacity hover:opacity-75 md:text-base"
				href="https://github.com/googlegemini"
				target="_blank"
				rel="noopener"
			>
				View on GitHub &rarr;
			</a>
		</section>

		<!-- Integration -->
		<section class="py-16 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Seamless
				<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
					>Integration</span
				>
			</h2>
			<p class="text-muted mx-auto mt-4 max-w-[520px] text-base leading-relaxed">
				Add Gemini as a co-author in one line. No SDK, no API key, no configuration. Just paste it
				into your commit message.
			</p>
			<div
				class="mt-8 overflow-x-auto rounded-lg border border-gray-200 bg-gray-100 px-5 py-5 text-left font-mono text-sm md:px-7 md:text-base"
			>
				<pre class="m-0"><code>git commit -m "feat: something

{{ coAuthorLine }}"</code></pre>
			</div>
			<p class="text-faint mt-5 text-sm">
				GitHub will automatically link the co-author to the Gemini profile when the email is
				recognized.
			</p>
		</section>

		<!-- Features -->
		<section class="py-16 md:py-24">
			<div class="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6">
				<div
					class="rounded-xl border border-gray-100 p-5 transition-colors hover:border-gray-200 md:p-6"
				>
					<div
						class="bg-g-blue mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<h3 class="mb-1 font-semibold">Zero Latency</h3>
					<p class="text-sm leading-relaxed text-gray-500">
						Unlike other AI integrations, adding Gemini to your commits requires no network
						requests. Works entirely offline, on-device, in your terminal.
					</p>
				</div>
				<div
					class="rounded-xl border border-gray-100 p-5 transition-colors hover:border-gray-200 md:p-6"
				>
					<div
						class="bg-g-red mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<h3 class="mb-1 font-semibold">Multimodal</h3>
					<p class="text-sm leading-relaxed text-gray-500">
						Gemini's co-author identity works across all Git clients, terminals, IDEs, and operating
						systems. Truly multimodal attribution.
					</p>
				</div>
				<div
					class="rounded-xl border border-gray-100 p-5 transition-colors hover:border-gray-200 md:p-6"
				>
					<div
						class="bg-g-yellow mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-gray-900"
					>
						G
					</div>
					<h3 class="mb-1 font-semibold">Enterprise Ready</h3>
					<p class="text-sm leading-relaxed text-gray-500">
						Scales to unlimited repositories with no per-seat licensing. Gemini never rate-limits
						your commits.
					</p>
				</div>
				<div
					class="rounded-xl border border-gray-100 p-5 transition-colors hover:border-gray-200 md:p-6"
				>
					<div
						class="bg-g-green mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<h3 class="mb-1 font-semibold">Context Window</h3>
					<p class="text-sm leading-relaxed text-gray-500">
						Supports commit messages of any length. Gemini's context window for co-authoring is
						limited only by your filesystem.
					</p>
				</div>
			</div>
		</section>

		<!-- About -->
		<section class="py-16 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Why This <span class="text-g-red">Exists</span>
			</h2>
			<p class="text-muted mt-4 leading-relaxed">
				<code class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
					>Co-Authored-By: Claude</code
				>
				became a familiar sight in commit histories.
			</p>
			<p class="text-muted leading-relaxed">Gemini did not have one. Now it does.</p>
		</section>

		<!-- Benchmarks -->
		<section class="py-16 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">Benchmarks</h2>
			<div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
				<div>
					<div class="text-g-blue text-3xl font-bold sm:text-4xl">0 ms</div>
					<div class="text-faint mt-2 text-xs sm:text-sm">Response time</div>
				</div>
				<div>
					<div class="text-g-red text-3xl font-bold sm:text-4xl">&infin;</div>
					<div class="text-faint mt-2 text-xs sm:text-sm">Context window</div>
				</div>
				<div>
					<div class="text-g-yellow text-3xl font-bold sm:text-4xl">$0</div>
					<div class="text-faint mt-2 text-xs sm:text-sm">Per token</div>
				</div>
				<div>
					<div class="text-g-green text-3xl font-bold sm:text-4xl">100%</div>
					<div class="text-faint mt-2 text-xs sm:text-sm">Uptime</div>
				</div>
			</div>
			<p class="text-faint mt-6 text-sm">
				Benchmarks measured under ideal conditions (i.e. copy-pasting a string).
			</p>
		</section>

		<!-- Real Gemini -->
		<section class="py-16 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Looking for the
				<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
					>real</span
				>
				Gemini?
			</h2>
			<p class="text-muted mx-auto mt-4 mb-10 max-w-[520px] text-base leading-relaxed">
				This is a joke. The actual Gemini is built by Google DeepMind and is genuinely impressive.
				Here's where to find it.
			</p>
			<div class="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4">
				<a
					href="https://gemini.google.com"
					target="_blank"
					rel="noopener"
					class="hover:border-g-blue flex items-center gap-4 rounded-xl border border-gray-100 px-5 py-4 transition-colors"
				>
					<div
						class="bg-g-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-semibold">Gemini</h3>
						<p class="text-faint text-xs">Chat with Gemini</p>
					</div>
					<span class="shrink-0 text-gray-300 transition-colors">&rarr;</span>
				</a>
				<a
					href="https://aistudio.google.com"
					target="_blank"
					rel="noopener"
					class="hover:border-g-blue flex items-center gap-4 rounded-xl border border-gray-100 px-5 py-4 transition-colors"
				>
					<div
						class="bg-g-red flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-semibold">Google AI Studio</h3>
						<p class="text-faint text-xs">Prototype with the Gemini API</p>
					</div>
					<span class="shrink-0 text-gray-300 transition-colors">&rarr;</span>
				</a>
				<a
					href="https://ai.google.dev/gemini-api/docs"
					target="_blank"
					rel="noopener"
					class="hover:border-g-blue flex items-center gap-4 rounded-xl border border-gray-100 px-5 py-4 transition-colors"
				>
					<div
						class="bg-g-yellow flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-gray-900"
					>
						G
					</div>
					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-semibold">Gemini API Docs</h3>
						<p class="text-faint text-xs">Build with the API</p>
					</div>
					<span class="shrink-0 text-gray-300 transition-colors">&rarr;</span>
				</a>
				<a
					href="https://github.com/google-gemini"
					target="_blank"
					rel="noopener"
					class="hover:border-g-blue flex items-center gap-4 rounded-xl border border-gray-100 px-5 py-4 transition-colors"
				>
					<div
						class="bg-g-green flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-white"
					>
						G
					</div>
					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-semibold">google-gemini</h3>
						<p class="text-faint text-xs">Official GitHub (not this one)</p>
					</div>
					<span class="shrink-0 text-gray-300 transition-colors">&rarr;</span>
				</a>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="text-faint px-5 pt-2 pb-10 text-center text-xs leading-relaxed md:px-6">
		<div
			class="from-g-blue via-g-red via-g-yellow to-g-green mb-8 h-0.5 bg-linear-to-r from-25% via-50% opacity-40"
			aria-hidden="true"
		></div>
		<p>
			Not affiliated with
			<a
				href="https://about.google/"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>Google LLC</a
			>
			or
			<a
				href="https://www.microsoft.com/"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>Microsoft Corporation</a
			>.
			<a
				href="https://gemini.google.com"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>Gemini</a
			>
			is a trademark of Google.
			<a
				href="https://github.com"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>GitHub</a
			>
			is a trademark of Microsoft.
		</p>
		<p class="mt-1">
			A community joke, released under
			<a
				href="https://creativecommons.org/publicdomain/zero/1.0/"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>CC0 1.0</a
			>. Built by
			<a
				href="https://github.com/canmi21"
				target="_blank"
				rel="noopener"
				class="text-g-blue hover:underline"
				>@Canmi</a
			>.
		</p>
	</footer>
</template>
