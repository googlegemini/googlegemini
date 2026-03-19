import js from '@eslint/js'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import oxlint from 'eslint-plugin-oxlint'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
	js.configs.recommended,
	pluginVue.configs['flat/recommended'],
	vueTsConfigs.recommended,
	{
		ignores: ['dist/', 'node_modules/', 'env.d.ts', 'og/'],
	},
	{
		// Formatting is handled by oxfmt — disable all ESLint formatting rules
		rules: {
			'vue/html-indent': 'off',
			'vue/html-closing-bracket-newline': 'off',
			'vue/html-self-closing': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/multiline-html-element-content-newline': 'off',
			'vue/first-attribute-linebreak': 'off',
			'vue/html-closing-bracket-spacing': 'off',
		},
	},
	{
		files: ['scripts/**/*.mjs'],
		languageOptions: {
			globals: {
				Buffer: 'readonly',
				console: 'readonly',
				fetch: 'readonly',
			},
		},
	},
	{
		plugins: { 'better-tailwindcss': betterTailwindcss },
		settings: {
			'better-tailwindcss': {
				entryPoint: 'src/style.css',
			},
		},
		rules: {
			...betterTailwindcss.configs.recommended.rules,
			// oxfmt handles tailwind class sorting/wrapping
			'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
			'better-tailwindcss/sort-classes': 'off',
			'better-tailwindcss/no-incorrect-order': 'off',
			'better-tailwindcss/enforce-consistent-class-order': 'off',
			// Multi-stop gradients (via-g-red + via-g-yellow) are intentional
			'better-tailwindcss/no-conflicting-classes': 'off',
			// Allow custom CSS classes (footer-link, text-g-* etc.)
			'better-tailwindcss/no-unknown-classes': 'off',
			'vue/no-v-html': 'off',
		},
	},
	...oxlint.configs['flat/recommended'],
)
