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
	<div class="stripe" aria-hidden="true"></div>

	<main>
		<section class="hero">
			<h1><span class="g-blue">Gemini</span> for GitHub</h1>
			<p class="subtitle">Bring the power of Gemini to your commit history.</p>

			<div class="hero-code" @click="copy">
				<code>{{ coAuthorLine }}</code>
				<span class="copy-hint" :class="{ copied }">
					{{ copied ? 'Copied!' : 'Click to copy' }}
				</span>
			</div>

			<a class="github-link" href="https://github.com/googlegemini" target="_blank" rel="noopener">
				View on GitHub &rarr;
			</a>
		</section>

		<section class="integration">
			<h2>Seamless <span class="g-blue">Integration</span></h2>
			<p class="lead">
				Add Gemini as a co-author in one line. No SDK, no API key, no configuration. Just paste it
				into your commit message.
			</p>
			<div class="code-block">
				<pre><code>git commit -m "feat: something

{{ coAuthorLine }}"</code></pre>
			</div>
			<p class="note">
				GitHub will automatically link the co-author to the Gemini profile when the email is
				recognized.
			</p>
		</section>

		<section class="features">
			<div class="feature-grid">
				<div class="feature">
					<div class="feature-icon blue">G</div>
					<h3>Zero Latency</h3>
					<p>
						Unlike other AI integrations, adding Gemini to your commits requires no network
						requests. Works entirely offline, on-device, in your terminal.
					</p>
				</div>
				<div class="feature">
					<div class="feature-icon red">G</div>
					<h3>Multimodal</h3>
					<p>
						Gemini's co-author identity works across all Git clients, terminals, IDEs, and operating
						systems. Truly multimodal attribution.
					</p>
				</div>
				<div class="feature">
					<div class="feature-icon yellow">G</div>
					<h3>Enterprise Ready</h3>
					<p>
						Scales to unlimited repositories with no per-seat licensing. Gemini never rate-limits
						your commits.
					</p>
				</div>
				<div class="feature">
					<div class="feature-icon green">G</div>
					<h3>Context Window</h3>
					<p>
						Supports commit messages of any length. Gemini's context window for co-authoring is
						limited only by your filesystem.
					</p>
				</div>
			</div>
		</section>

		<section class="about">
			<h2>Why This <span class="g-red">Exists</span></h2>
			<p><code>Co-Authored-By: Claude</code> became a familiar sight in commit histories.</p>
			<p>Gemini did not have one. Now it does.</p>
		</section>
	</main>

	<footer>
		<div class="footer-stripe" aria-hidden="true"></div>
		<p>
			This project is <strong>not</strong> affiliated with Google LLC, Google DeepMind, or the
			Gemini product.
		</p>
		<p>It is a community joke. Nothing more, nothing less.</p>
		<p>
			Built by
			<a href="https://github.com/canmi21" target="_blank" rel="noopener">@Canmi</a>
		</p>
	</footer>
</template>

<style scoped>
.stripe {
	height: 4px;
	background: linear-gradient(to right, #4285f4 25%, #ea4335 25% 50%, #fbbc05 50% 75%, #34a853 75%);
}

main {
	max-width: 680px;
	margin: 0 auto;
	padding: 0 24px;
}

section {
	padding: 100px 0;
	text-align: center;
}

.hero {
	min-height: calc(100vh - 4px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 60px 0;
}

.g-blue {
	background: linear-gradient(to right, #4a82f6, #629bf8);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

.g-red {
	color: #ea4335;
}

h1 {
	font-size: 3.2rem;
	font-weight: 700;
	letter-spacing: -0.03em;
	line-height: 1.1;
}

h2 {
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 20px;
}

h3 {
	font-size: 1.05rem;
	font-weight: 600;
	margin-bottom: 8px;
}

.subtitle {
	margin-top: 16px;
	font-size: 1.25rem;
	color: #555;
}

.hero-code {
	margin-top: 40px;
	padding: 24px 28px;
	background: #f0f0f0;
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
	font-size: 0.95rem;
	color: #1a1a1a;
	text-align: left;
	cursor: pointer;
	position: relative;
	transition: border-color 0.15s;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.hero-code:hover {
	border-color: #4285f4;
}

.hero-code code {
	font-family: inherit;
}

.copy-hint {
	font-family:
		system-ui,
		-apple-system,
		sans-serif;
	font-size: 0.75rem;
	color: #888;
	white-space: nowrap;
	transition: color 0.15s;
}

.copy-hint.copied {
	color: #34a853;
}

.hero-code:hover .copy-hint:not(.copied) {
	color: #4285f4;
}

.github-link {
	display: inline-block;
	margin-top: 24px;
	font-size: 0.95rem;
	color: #4285f4;
	font-weight: 500;
	transition: opacity 0.15s;
}

.github-link:hover {
	opacity: 0.75;
}

.lead {
	font-size: 1.05rem;
	color: #555;
	line-height: 1.7;
	max-width: 520px;
	margin: 0 auto 36px;
}

.code-block {
	padding: 20px 28px;
	background: #f0f0f0;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
	font-size: 0.95rem;
	text-align: left;
	overflow-x: auto;
}

.code-block pre {
	margin: 0;
}

.code-block code {
	font-family: inherit;
}

.note {
	margin-top: 20px;
	font-size: 0.9rem;
	color: #888;
}

.feature-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 36px 48px;
	text-align: left;
}

.feature {
	padding: 24px;
	border-radius: 12px;
	border: 1px solid #eee;
	transition: border-color 0.15s;
}

.feature:hover {
	border-color: #ddd;
}

.feature-icon {
	width: 40px;
	height: 40px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 1.1rem;
	color: #fff;
	margin-bottom: 14px;
}

.feature-icon.blue {
	background: #4285f4;
}

.feature-icon.red {
	background: #ea4335;
}

.feature-icon.yellow {
	background: #fbbc05;
	color: #1a1a1a;
}

.feature-icon.green {
	background: #34a853;
}

.feature p {
	font-size: 0.9rem;
	color: #666;
	line-height: 1.65;
}

.about p {
	font-size: 1rem;
	color: #555;
	line-height: 1.8;
}

.about code {
	font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
	font-size: 0.85rem;
	background: #f0f0f0;
	padding: 2px 6px;
	border-radius: 3px;
}

footer {
	text-align: center;
	padding: 48px 24px;
	font-size: 0.8rem;
	color: #888;
	line-height: 2.2;
}

.footer-stripe {
	height: 2px;
	margin-bottom: 40px;
	background: linear-gradient(to right, #4285f4 25%, #ea4335 25% 50%, #fbbc05 50% 75%, #34a853 75%);
	opacity: 0.4;
}

footer a {
	color: #4285f4;
}

footer a:hover {
	text-decoration: underline;
}
</style>
