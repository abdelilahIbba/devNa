import { ref, computed } from 'vue'
import { translations, type Locale } from './translations'

const locale = ref<Locale>('en')

export function useI18n() {
  const t = computed(() => translations[locale.value])

  function setLocale(code: Locale) {
    locale.value = code
    localStorage.setItem('devna_locale', code)
    applyLocale(code)
  }

  function applyLocale(code: Locale) {
    const html = document.documentElement
    html.lang = code
    if (code === 'ar') {
      html.dir = 'rtl'
      html.classList.add('rtl')
    } else {
      html.dir = 'ltr'
      html.classList.remove('rtl')
    }
  }

  function initLocale() {
    const saved = localStorage.getItem('devna_locale') as Locale | null
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      locale.value = saved
    }
    applyLocale(locale.value)
  }

  return {
    locale,
    t,
    setLocale,
    initLocale
  }
}
