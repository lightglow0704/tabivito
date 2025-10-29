import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/style.css'
import { createPinia } from 'pinia'
import { useUserStore } from '@/store/userStore.js'
import i18n from './i18n'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')

// 로그인 상태 초기화
const userStore = useUserStore()
userStore.fetchMeOnce()
