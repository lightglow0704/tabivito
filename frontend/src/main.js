import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/style.css'
import { createPinia } from 'pinia'
import { useUserStore } from '@/store/userStore.js'
import i18n from './i18n'

// ✅ 1. 앱 시작 전, 저장된 언어 불러오기
const savedLocale = localStorage.getItem('tabivito:locale') || 'kr'
i18n.global.locale.value = savedLocale
document.documentElement.setAttribute('lang', savedLocale)

// ✅ 2. 앱 생성 및 설정
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(i18n)

// ✅ 3. 스토어 초기화 (로그인 정보 로드)
const userStore = useUserStore()
await userStore.fetchMeOnce()

// ✅ 4. 언어 변경 시 html lang, 찜 목록 자동 재로딩
watch(
    () => i18n.global.locale.value,
    (val) => {
        if (val) {
            localStorage.setItem('tabivito:locale', val)
            document.documentElement.setAttribute('lang', val)
            userStore.loadFavorites()
        }
    }
)

app.mount('#app')
