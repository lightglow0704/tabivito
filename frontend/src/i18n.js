// src/i18n.js
import { createI18n } from 'vue-i18n'
import kr from '@/locales/kr.js'
import jp from '@/locales/jp.js'

const saved = localStorage.getItem('lang')
const startLocale = saved === 'kr' || saved === 'jp' ? saved : 'jp'

const i18n = createI18n({
    legacy: false,          // Composition API
    globalInjection: true,  // 전역 t 사용 가능
    locale: startLocale,    // 'kr' | 'jp'
    fallbackLocale: 'jp',
    messages: { kr, jp },
})

// (선택) 앱 어디서든 언어 바꾸기 쉽게 helper export
export function setLocale(lang) {
    if (lang === 'kr' || lang === 'jp') {
        i18n.global.locale.value = lang
        localStorage.setItem('lang', lang)
    }
}

export default i18n
