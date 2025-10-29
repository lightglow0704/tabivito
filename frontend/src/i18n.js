// src/i18n.js
import { createI18n } from 'vue-i18n'
import kr from '@/locales/kr.js'
import jp from '@/locales/jp.js'

const i18n = createI18n({
    legacy: false,          // Composition API 스타일
    globalInjection: true,  // 전역 t 사용 가능
    locale: 'jp',           // 기본 언어
    fallbackLocale: 'jp',
    messages: {
        kr,
        jp,
    },
})

export default i18n
