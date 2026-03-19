import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import app from './app.vue'

export async function render(): Promise<string> {
	return renderToString(createSSRApp(app))
}
