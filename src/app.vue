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
		accentClass: 'bg-g-blue',
	},
	{
		title: 'Multimodal',
		description:
			"Gemini's co-author identity works across all Git clients, terminals, IDEs, and operating systems. Truly multimodal attribution.",
		accentClass: 'bg-g-red',
	},
	{
		title: 'Enterprise Ready',
		description:
			'Scales to unlimited repositories with no per-seat licensing. Gemini never rate-limits your commits.',
		accentClass: 'bg-g-yellow',
	},
	{
		title: 'Context Window',
		description:
			"Supports commit messages of any length. Gemini's context window for co-authoring is limited only by your filesystem.",
		accentClass: 'bg-g-green',
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
	/>

	<main class="mx-auto max-w-170 px-4 sm:px-5 md:px-6">
		<HeroSection
			:co-author-prefix="coAuthorPrefix"
			:co-author-identity="coAuthorIdentity"
			:co-author-line="coAuthorLine"
			:repo-url="repoUrl"
		/>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Seamless
				<span class="to-g-blue-light bg-linear-to-r from-[#4a82f6] bg-clip-text text-transparent"
					>Integration</span
				>
			</h2>
			<p
				class="text-muted mx-auto mt-4 max-w-88 text-[13px] leading-relaxed sm:max-w-130 sm:text-base"
			>
				<span class="block sm:hidden">Add Gemini as a co-author. No SDK, no API key.</span>
				<span class="block sm:hidden">Just paste it into your commit message.</span>
				<span class="hidden sm:inline"
					>Add Gemini as a co-author in one line. No SDK, no API key, no configuration. Just paste
					it into your commit message.</span
				>
			</p>
			<div
				class="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-100 p-4 text-left font-mono text-[12px] md:px-7 md:py-5 md:text-base dark:border-gray-700 dark:bg-white/5"
			>
				<pre class="m-0"><code>git commit -m "feat: something

        {{ coAuthorLine }}"</code></pre>
			</div>
			<p class="text-faint mx-auto mt-5 max-w-[20rem] text-xs/relaxed sm:max-w-none sm:text-sm">
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
					:accent-class="feature.accentClass"
				/>
			</div>
		</section>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Why This <span class="text-g-red">Exists</span>
			</h2>
			<div class="mx-auto mt-4 max-w-84 space-y-3 sm:max-w-120">
				<div>
					<code class="rounded-sm bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-white/10"
						>Co-Authored-By: Claude</code
					>
				</div>
				<p class="text-muted text-sm/relaxed sm:text-base">
					became a familiar sight in commit histories.
				</p>
				<p class="text-muted text-sm/relaxed sm:text-base">Gemini did not have one. Now it does.</p>
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
					/>
					<div class="text-faint mt-2 text-xs sm:text-sm">
						{{ benchmark.label }}
					</div>
				</div>
			</div>
			<p
				class="text-faint mx-auto mt-6 max-w-[18rem] text-[11px] leading-relaxed sm:max-w-none sm:text-sm"
			>
				<span class="block sm:hidden">Benchmarks measured from copy-pasting a string.</span>
				<span class="hidden sm:inline"
					>Benchmarks measured under ideal conditions (i.e. copy-pasting a string).</span
				>
			</p>
		</section>

		<section class="py-12 text-center md:py-24">
			<h2 class="text-xl font-semibold md:text-2xl">
				Looking for the
				<span class="to-g-blue-light bg-linear-to-r from-[#4a82f6] bg-clip-text text-transparent"
					>real</span
				>
				Gemini?
			</h2>
			<p class="text-muted mx-auto mt-4 mb-8 max-w-130 text-sm/relaxed sm:mb-10 sm:text-base">
				<span class="block sm:hidden"
					>This is a joke. The real Gemini is built by Google DeepMind. Here’s where to find
					it.</span
				>
				<span class="hidden sm:inline"
					>This is a joke. The actual Gemini is built by Google DeepMind and is genuinely
					impressive. Here's where to find it.</span
				>
			</p>
			<div class="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4">
				<!-- Gemini -->
				<LinkCard
					title="Gemini"
					description="Chat with Gemini"
					href="https://gemini.google.com"
					icon-bg-class="bg-g-blue"
					icon-text-class="text-white"
				>
					<template #icon>
						<svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path
								d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
							/>
						</svg>
					</template>
				</LinkCard>
				<!-- Google AI Studio -->
				<LinkCard
					title="Google AI Studio"
					description="Prototype with the Gemini API"
					href="https://aistudio.google.com"
					icon-bg-class="bg-g-red"
					icon-text-class="text-white"
				>
					<template #icon>
						<svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" class="size-5">
							<path
								d="M9.921 4.196H6.328A2.705 2.705 0 003.623 6.9v11.362a2.705 2.705 0 002.705 2.705h11.363a2.705 2.705 0 002.705-2.705v-4.756l1.623-1.113v5.87a4.329 4.329 0 01-4.328 4.328H6.328A4.329 4.329 0 012 18.263V6.901a4.328 4.328 0 014.328-4.329h4.545l-.952 1.624z"
							/>
							<path
								d="M17.82 0c.145 0 .268.104.299.246a7 7 0 001.9 3.484 7 7 0 003.485 1.901c.142.031.246.154.246.3a.308.308 0 01-.246.298A7 7 0 0020.02 8.13a7 7 0 00-1.912 3.535.297.297 0 01-.288.238.297.297 0 01-.288-.238A7 7 0 0015.62 8.13a7 7 0 00-3.535-1.912.297.297 0 01-.238-.288c0-.14.1-.26.238-.288A7 7 0 0015.62 3.73 7.001 7.001 0 0017.521.246.308.308 0 0117.82 0z"
							/>
						</svg>
					</template>
				</LinkCard>
				<!-- Gemini API Docs -->
				<LinkCard
					title="Gemini API Docs"
					description="Build with the API"
					href="https://ai.google.dev/gemini-api/docs"
					icon-bg-class="bg-g-yellow"
					icon-text-class="text-white"
				>
					<template #icon>
						<svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path
								d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							/>
						</svg>
					</template>
				</LinkCard>
				<!-- google-gemini on GitHub -->
				<LinkCard
					title="google-gemini"
					description="Official GitHub (not this one)"
					href="https://github.com/google-gemini"
					icon-bg-class="bg-g-green"
					icon-text-class="text-white"
				>
					<template #icon>
						<svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</template>
				</LinkCard>
			</div>
		</section>
	</main>

	<SiteFooter />
</template>
