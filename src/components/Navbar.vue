<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent']">
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
            class="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-2"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </router-link>
          
          <!-- Language Switcher -->
          <div class="relative group">
            <button class="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium">
              <span>{{ locale.toUpperCase() }}</span>
              <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <!-- Dropdown -->
            <div class="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
               <div class="bg-slate-900 border border-slate-700/50 rounded-xl shadow-xl overflow-hidden min-w-[140px] p-1">
                  <button @click="changeLocale('en')" class="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors flex justify-between">
                    <span>English</span>
                    <span v-if="locale==='en'" class="text-cyan-400">●</span>
                  </button>
                  <button @click="changeLocale('fr')" class="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors flex justify-between">
                    <span>Français</span>
                    <span v-if="locale==='fr'" class="text-cyan-400">●</span>
                  </button>
                  <button @click="changeLocale('ar')" class="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors flex justify-between">
                    <span>العربية</span>
                    <span v-if="locale==='ar'" class="text-cyan-400">●</span>
                  </button>
               </div>
            </div>
          </div>

          <button class="px-6 py-2.5 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
            {{ t.nav.getStarted }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
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
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl absolute w-full left-0">
        <div class="px-4 py-6 space-y-4">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-lg"
          >
            {{ link.name }}
          </router-link>
          <div class="pt-4 border-t border-slate-800 flex flex-col gap-4">
              <div class="flex gap-2">
                 <button @click="changeLocale('en')" class="px-3 py-1 rounded bg-slate-800 text-slate-300 text-sm" :class="{'ring-1 ring-cyan-400': locale === 'en'}">EN</button>
                 <button @click="changeLocale('fr')" class="px-3 py-1 rounded bg-slate-800 text-slate-300 text-sm" :class="{'ring-1 ring-cyan-400': locale === 'fr'}">FR</button>
                  <button @click="changeLocale('ar')" class="px-3 py-1 rounded bg-slate-800 text-slate-300 text-sm" :class="{'ring-1 ring-cyan-400': locale === 'ar'}">AR</button>
              </div>
              <button class="w-full py-3 bg-cyan-500 text-white rounded-lg font-semibold">
                {{ t.nav.getStarted }}
              </button>
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

const { t, locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)
const openLang = ref(false)
const scrolled = ref(false)

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

const handleScroll = () => {
   scrolled.value = window.scrollY > 20
}

onMounted(() => {
   window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
   window.removeEventListener('scroll', handleScroll)
})
</script>
