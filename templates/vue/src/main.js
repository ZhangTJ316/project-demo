import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/**
 * 创建Vue应用实例
 * @type {import('vue').App}
 */
const app = createApp(App)

/**
 * 挂载应用到DOM
 */
app.mount('#app') 