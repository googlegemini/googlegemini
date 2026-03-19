<script setup lang="ts">
import FeatureCard from './components/feature-card.vue'
import HeroSection from './components/hero-section.vue'
import LinkCard from './components/link-card.vue'
import SiteFooter from './components/site-footer.vue'

const coAuthorPrefix = 'Co-Authored-By:'
const coAuthorIdentity = 'Gemini <gemini@gogle.cc>'
const coAuthorLine = `${coAuthorPrefix} ${coAuthorIdentity}`
const repoUrl = 'https://github.com/googlegemini'

const features = [
	{
		title: 'Zero Latency',
		description:
			'Unlike other AI integrations, adding Gemini to your commits requires no network requests. Works entirely offline, on-device, in your terminal.',
		iconBgClass: 'bg-g-blue',
		iconTextClass: 'text-white',
	},
	{
		title: 'Multimodal',
		description:
			"Gemini's co-author identity works across all Git clients, terminals, IDEs, and operating systems. Truly multimodal attribution.",
		iconBgClass: 'bg-g-red',
		iconTextClass: 'text-white',
	},
	{
		title: 'Enterprise Ready',
		description:
			'Scales to unlimited repositories with no per-seat licensing. Gemini never rate-limits your commits.',
		iconBgClass: 'bg-g-yellow',
		iconTextClass: 'text-gray-900',
	},
	{
		title: 'Context Window',
		description:
			"Supports commit messages of any length. Gemini's context window for co-authoring is limited only by your filesystem.",
		iconBgClass: 'bg-g-green',
		iconTextClass: 'text-white',
	},
] as const

const links = [
	{
		title: 'Gemini',
		description: 'Chat with Gemini',
		href: 'https://gemini.google.com',
		iconBgClass: 'bg-g-blue',
		iconTextClass: 'text-white',
	},
	{
		title: 'Google AI Studio',
		description: 'Prototype with the Gemini API',
		href: 'https://aistudio.google.com',
		iconBgClass: 'bg-g-red',
		iconTextClass: 'text-white',
	},
	{
		title: 'Gemini API Docs',
		description: 'Build with the API',
		href: 'https://ai.google.dev/gemini-api/docs',
		iconBgClass: 'bg-g-yellow',
		iconTextClass: 'text-gray-900',
	},
	{
		title: 'google-gemini',
		description: 'Official GitHub (not this one)',
		href: 'https://github.com/google-gemini',
		iconBgClass: 'bg-g-green',
		iconTextClass: 'text-white',
	},
] as const

const benchmarks = [
	{ value: '0 ms', label: 'Response time', valueClass: 'text-g-blue' },
	{ value: '&infin;', label: 'Context window', valueClass: 'text-g-red' },
	{ value: '$0', label: 'Per token', valueClass: 'text-g-yellow' },
	{ value: '100%', label: 'Uptime', valueClass: 'text-g-green' },
] as const
</script>

<template>
	<div
		class="from-g-blue via-g-red via-g-yellow to-g-green h-1 bg-linear-to-r from-25% via-50%"
		aria-hidden="true"
	></div>

	<main class="mx-auto max-w-[680px] px-4 sm:px-5 md:px-6">
		<HeroSection
			:co-author-prefix="coAuthorPrefix"
			:co-author-identity="coAuthorIdentity"
			:co-author-line="coAuthorLine"
			:repo-url="repoUrl"
		/>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Seamless
				<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
					>Integration</span
				>
			</h2>
			<p
				class="text-muted mx-auto mt-4 max-w-[22rem] text-sm leading-relaxed sm:max-w-[520px] sm:text-base"
			>
				Add Gemini as a co-author in one line. No SDK, no API key, no configuration.
				<span class="block sm:inline">Just paste it into your commit message.</span>
			</p>
			<div
				class="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-100 px-4 py-4 text-left font-mono text-sm md:px-7 md:py-5 md:text-base"
			>
				<pre class="m-0"><code>git commit -m "feat: something

{{ coAuthorLine }}"</code></pre>
			</div>
			<p
				class="text-faint mx-auto mt-5 max-w-[20rem] text-xs leading-relaxed sm:max-w-[28rem] sm:text-sm"
			>
				GitHub will automatically link the co-author to the Gemini profile when the email is
				recognized.
			</p>
		</section>

		<section class="py-12 md:py-24">
			<div class="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6">
				<FeatureCard
					v-for="feature in features"
					:key="feature.title"
					:title="feature.title"
					:description="feature.description"
					:icon-bg-class="feature.iconBgClass"
					:icon-text-class="feature.iconTextClass"
				/>
			</div>
		</section>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Why This <span class="text-g-red">Exists</span>
			</h2>
			<div class="mx-auto mt-4 max-w-[21rem] space-y-3 sm:max-w-[30rem]">
				<div>
					<code class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
						>Co-Authored-By: Claude</code
					>
				</div>
				<p class="text-muted text-sm leading-relaxed sm:text-base">
					became a familiar sight in commit histories.
				</p>
				<p class="text-muted text-sm leading-relaxed sm:text-base">
					Gemini did not have one. Now it does.
				</p>
			</div>
		</section>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">Benchmarks</h2>
			<div class="mt-8 grid grid-cols-2 gap-6 sm:mt-10 sm:grid-cols-4 sm:gap-8">
				<div v-for="benchmark in benchmarks" :key="benchmark.label">
					<div
						class="text-3xl font-bold sm:text-4xl"
						:class="benchmark.valueClass"
						v-html="benchmark.value"
					></div>
					<div class="text-faint mt-2 text-xs sm:text-sm">{{ benchmark.label }}</div>
				</div>
			</div>
			<p
				class="text-faint mx-auto mt-6 max-w-[18rem] text-[11px] leading-relaxed sm:max-w-[26rem] sm:text-sm"
			>
				Benchmarks measured under ideal conditions (i.e. copy-pasting a string).
			</p>
		</section>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Looking for the
				<span class="bg-linear-to-r from-[#4a82f6] to-[#629bf8] bg-clip-text text-transparent"
					>real</span
				>
				Gemini?
			</h2>
			<p
				class="text-muted mx-auto mt-4 mb-8 max-w-[520px] text-sm leading-relaxed sm:mb-10 sm:text-base"
			>
				This is a joke. The actual Gemini is built by Google DeepMind and is genuinely impressive.
				Here's where to find it.
			</p>
			<div class="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4">
				<LinkCard
					v-for="link in links"
					:key="link.title"
					:title="link.title"
					:description="link.description"
					:href="link.href"
					:icon-bg-class="link.iconBgClass"
					:icon-text-class="link.iconTextClass"
				/>
			</div>
		</section>
	</main>

	<SiteFooter />
</template>
