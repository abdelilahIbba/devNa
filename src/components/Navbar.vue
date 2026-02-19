<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[isDark ? (scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent') : (scrolled ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'bg-transparent border-b border-transparent')]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="relative w-10 h-10 flex items-center justify-center bg-linear-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
             <svg class="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 19V5H12.4C15.1 5 17.2 7.1 17.2 9.8C17.2 12.5 15.1 14.6 12.4 14.6H8.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8 14.6L18.7 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
             </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold leading-none text-white tracking-tight">
              Dev<span class="text-cyan-400">NApp</span>
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-sm font-medium transition-colors relative group py-2"
            :class="isActive(link.path) ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')"
          >
            {{ link.name }}
            <span
              class="absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300"
              :class="isActive(link.path) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'"
            ></span>
          </router-link>
          
          <!-- Language Switcher -->
          <div class="relative" ref="langDropdownRef">
            <button @click="openLang = !openLang" class="flex items-center gap-2 transition-colors text-sm font-medium" :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'">
              <span>{{ locale.toUpperCase() }}</span>
              <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <!-- Dropdown -->
            <div class="absolute right-0 top-full pt-2 transition-all duration-200 transform" :class="openLang ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'">
               <div class="border rounded-xl shadow-xl overflow-hidden min-w-[140px] p-1" :class="isDark ? 'bg-slate-900 border-slate-700/50' : 'bg-white border-slate-200'">
                  <button @click="changeLocale('en')" class="w-full text-left px-4 py-2 text-sm rounded-lg transition-colors flex justify-between" :class="isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'">
                    <span>English</span>
                    <span v-if="locale==='en'" class="text-cyan-400">●</span>
                  </button>
                  <button @click="changeLocale('fr')" class="w-full text-left px-4 py-2 text-sm rounded-lg transition-colors flex justify-between" :class="isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'">
                    <span>Français</span>
                    <span v-if="locale==='fr'" class="text-cyan-400">●</span>
                  </button>
                  <button @click="changeLocale('ar')" class="w-full text-left px-4 py-2 text-sm rounded-lg transition-colors flex justify-between" :class="isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'">
                    <span>العربية</span>
                    <span v-if="locale==='ar'" class="text-cyan-400">●</span>
                  </button>
               </div>
            </div>
          </div>

          <router-link to="/contact" class="px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-lg" :class="isDark ? 'bg-white text-slate-900 hover:bg-cyan-50 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/15'">
            Book Discovery Call
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 transition-colors"
          :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t backdrop-blur-xl absolute w-full left-0" :class="isDark ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'">
        <div class="px-4 py-6 space-y-4">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-lg transition-colors text-lg"
            :class="isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
          >
            {{ link.name }}
          </router-link>
          <div class="pt-4 border-t flex flex-col gap-4" :class="isDark ? 'border-slate-800' : 'border-slate-200'">
              <div class="flex gap-2">
                 <button @click="changeLocale('en')" class="px-3 py-1 rounded text-sm" :class="[isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700', {'ring-1 ring-cyan-400': locale === 'en'}]">EN</button>
                 <button @click="changeLocale('fr')" class="px-3 py-1 rounded text-sm" :class="[isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700', {'ring-1 ring-cyan-400': locale === 'fr'}]">FR</button>
                  <button @click="changeLocale('ar')" class="px-3 py-1 rounded text-sm" :class="[isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700', {'ring-1 ring-cyan-400': locale === 'ar'}]">AR</button>
              </div>
              <router-link to="/contact" @click="mobileMenuOpen = false" class="w-full py-3 rounded-lg font-semibold text-center transition-colors" :class="isDark ? 'bg-cyan-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'">
                Book Discovery Call
              </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n'
import type { Locale } from '@/i18n/translations'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { t, locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)
const openLang = ref(false)
const scrolled = ref(false)
const route = useRoute()
const langDropdownRef = ref<HTMLElement | null>(null)
const { theme } = useTheme()
const isDark = computed(() => theme.value === 'dark')

const navLinks = computed(() => [
  { name: t.value.nav?.home || 'Home', path: '/' },
  { name: t.value.nav?.projects || 'Projects', path: '/projects' },
  { name: t.value.nav?.about || 'About', path: '/about' },
  { name: t.value.nav?.contact || 'Contact', path: '/contact' }
])

const changeLocale = (newLocale: Locale) => {
  setLocale(newLocale)
  openLang.value = false
}

const isActive = (path: string) => {
  return route.path === path
}

const handleScroll = () => {
   scrolled.value = window.scrollY > 20
}

const handleOutsideClick = (event: MouseEvent) => {
  if (!openLang.value) return
  const target = event.target as Node
  if (langDropdownRef.value && !langDropdownRef.value.contains(target)) {
   openLang.value = false
  }
}

onMounted(() => {
   window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
   window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
})
</script>
