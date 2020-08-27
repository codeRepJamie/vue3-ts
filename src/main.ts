import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as colors from '@/styles/colors'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.colors = colors
