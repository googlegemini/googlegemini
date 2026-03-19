import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(({ isSsrBuild }) => ({
	plugins: [tailwindcss(), vue()],
	build: {
		rollupOptions: {
			output: isSsrBuild
				? { entryFileNames: 'render.js' }
				: {
						entryFileNames: '[hash:16].js',
						chunkFileNames: '[hash:16].js',
						assetFileNames: '[hash:16].[ext]',
						hashCharacters: 'hex' as const,
					},
		},
	},
}))
