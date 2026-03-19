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

		<section class="benchmarks">
			<h2>Benchmarks</h2>
			<div class="benchmark-grid">
				<div class="benchmark">
					<div class="benchmark-value g-blue">0 ms</div>
					<div class="benchmark-label">Response time</div>
				</div>
				<div class="benchmark">
					<div class="benchmark-value g-red">&infin;</div>
					<div class="benchmark-label">Context window</div>
				</div>
				<div class="benchmark">
					<div class="benchmark-value g-yellow">$0</div>
					<div class="benchmark-label">Per token</div>
				</div>
				<div class="benchmark">
					<div class="benchmark-value g-green">100%</div>
					<div class="benchmark-label">Uptime</div>
				</div>
			</div>
			<p class="note">Benchmarks measured under ideal conditions (i.e. copy-pasting a string).</p>
		</section>

		<section class="real">
			<h2>Looking for the <span class="g-blue">real</span> Gemini?</h2>
			<p class="lead">
				This is a joke. The actual Gemini is built by Google DeepMind and is
				genuinely impressive. Here's where to find it.
			</p>
			<div class="link-grid">
				<a href="https://gemini.google.com" target="_blank" rel="noopener" class="link-card">
					<div class="link-icon blue">G</div>
					<div class="link-content">
						<h3>Gemini</h3>
						<p>Chat with Gemini</p>
					</div>
					<span class="link-arrow">&rarr;</span>
				</a>
				<a href="https://aistudio.google.com" target="_blank" rel="noopener" class="link-card">
					<div class="link-icon red">G</div>
					<div class="link-content">
						<h3>Google AI Studio</h3>
						<p>Prototype with the Gemini API</p>
					</div>
					<span class="link-arrow">&rarr;</span>
				</a>
				<a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener" class="link-card">
					<div class="link-icon yellow">G</div>
					<div class="link-content">
						<h3>Gemini API Docs</h3>
						<p>Build with the API</p>
					</div>
					<span class="link-arrow">&rarr;</span>
				</a>
				<a href="https://github.com/google-gemini" target="_blank" rel="noopener" class="link-card">
					<div class="link-icon green">G</div>
					<div class="link-content">
						<h3>google-gemini</h3>
						<p>Official GitHub (not this one)</p>
					</div>
					<span class="link-arrow">&rarr;</span>
				</a>
			</div>
		</section>
	</main>

	<footer>
		<div class="footer-stripe" aria-hidden="true"></div>
		<p>
			Not affiliated with
			<a href="https://about.google/" target="_blank" rel="noopener">Google LLC</a> or
			<a href="https://www.microsoft.com/" target="_blank" rel="noopener">Microsoft Corporation</a>.
			<a href="https://gemini.google.com" target="_blank" rel="noopener">Gemini</a> is a trademark of Google.
			<a href="https://github.com" target="_blank" rel="noopener">GitHub</a> is a trademark of Microsoft.
		</p>
		<p>
			A community joke, released under
			<a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener">CC0 1.0</a>.
			Built by
			<a href="https://github.com/canmi21" target="_blank" rel="noopener">@Canmi</a>.
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

.benchmark-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	margin-top: 40px;
}

.benchmark {
	text-align: center;
}

.benchmark-value {
	font-size: 2.4rem;
	font-weight: 700;
	line-height: 1;
	margin-bottom: 8px;
}

.benchmark-label {
	font-size: 0.85rem;
	color: #888;
}

.g-yellow {
	color: #fbbc05;
}

.g-green {
	color: #34a853;
}

.link-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	text-align: left;
}

.link-card {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 20px;
	border-radius: 12px;
	border: 1px solid #eee;
	transition: border-color 0.15s;
}

.link-card:hover {
	border-color: #4285f4;
}

.link-icon {
	width: 40px;
	height: 40px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 1.1rem;
	color: #fff;
	flex-shrink: 0;
}

.link-icon.blue {
	background: #4285f4;
}

.link-icon.red {
	background: #ea4335;
}

.link-icon.yellow {
	background: #fbbc05;
	color: #1a1a1a;
}

.link-icon.green {
	background: #34a853;
}

.link-content {
	flex: 1;
	min-width: 0;
}

.link-content h3 {
	font-size: 0.95rem;
	font-weight: 600;
	margin-bottom: 2px;
}

.link-content p {
	font-size: 0.8rem;
	color: #888;
}

.link-arrow {
	color: #ccc;
	font-size: 1.1rem;
	flex-shrink: 0;
	transition: color 0.15s;
}

.link-card:hover .link-arrow {
	color: #4285f4;
}

.real .lead {
	margin-bottom: 40px;
}

footer {
	text-align: center;
	padding: 48px 24px;
	font-size: 0.8rem;
	color: #888;
	line-height: 1.8;
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
