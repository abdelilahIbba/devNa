import { ref } from 'vue'

export type ThemeMode = 'dark'

const STORAGE_KEY = 'devna-theme'
const theme = ref<ThemeMode>('dark')

const applyThemeToDom = (mode: ThemeMode) => {
  document.documentElement.setAttribute('data-theme', mode)
}

export const initTheme = () => {
  theme.value = 'dark'
  localStorage.setItem(STORAGE_KEY, 'dark')
  applyThemeToDom(theme.value)
}

export const useTheme = () => {
  const setTheme = (mode: ThemeMode) => {
    theme.value = mode
    applyThemeToDom(mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }

  const toggleTheme = () => {
    setTheme('dark')
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
}
