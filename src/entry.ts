import { createSSRApp } from 'vue'
import app from './app.vue'
import './style.css'

createSSRApp(app).mount('#app')
