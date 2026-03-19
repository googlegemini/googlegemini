import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [tailwindcss(), vue()],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[hash:8].js',
				chunkFileNames: '[hash:8].js',
				assetFileNames: '[hash:8].[ext]',
				hashCharacters: 'hex',
			},
		},
	},
})
