import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initTheme } from './composables/useTheme'
import { useI18n } from './i18n'

initTheme()
useI18n().initLocale()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
