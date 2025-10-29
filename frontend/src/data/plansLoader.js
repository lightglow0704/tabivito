import i18n from '@/i18n'
import krPlans from './plans.kr.js'
import jpPlans from './plans.jp.js'

export function getPlansForLocale(localeOverride) {
    const currentLocale =
        localeOverride ||
        (typeof i18n.global.locale === 'object' && 'value' in i18n.global.locale
            ? i18n.global.locale.value
            : i18n.global.locale)

    if (currentLocale === 'jp') {
        return jpPlans
    }
    return krPlans
}
