<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="relative w-10 h-10">
            <!-- Hexagon Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-devna-primary to-devna-accent rounded-lg transform group-hover:rotate-180 transition-transform duration-500"></div>
            <!-- Inner Content -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold leading-none">
              <span class="text-devna-accent">Dev</span><span class="text-devna-primary">NA</span>
            </span>
            <span class="text-[8px] text-gray-500 tracking-wider uppercase leading-none mt-0.5">Development</span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-600 hover:text-devna-primary font-medium transition-colors duration-300 relative group"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-devna-primary group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <!-- Language Switcher -->
          <div class="relative" @mouseenter="openLang = true" @mouseleave="openLang = false">
            <button
              class="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-devna-primary/50 hover:bg-gray-50 transition-colors"
              aria-label="Change language"
            >
              <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0s3 3 3 9-3 9-3 9m0-18s-3 3-3 9 3 9 3 9M3 12h18" />
              </svg>
              <span class="text-sm font-medium text-gray-700">{{ locale.toUpperCase() }}</span>
            </button>
            <div
              v-if="openLang"
              class="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
            >
              <button @click="changeLocale('en')" class="flex items-center justify-between w-full px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">
                <span class="font-medium">English</span>
                <span v-if="locale==='en'" class="text-devna-primary text-lg">✓</span>
              </button>
              <button @click="changeLocale('fr')" class="flex items-center justify-between w-full px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">
                <span class="font-medium">Français</span>
                <span v-if="locale==='fr'" class="text-devna-primary text-lg">✓</span>
              </button>
              <button @click="changeLocale('ar')" class="flex items-center justify-between w-full px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">
                <span class="font-medium">العربية</span>
                <span v-if="locale==='ar'" class="text-devna-primary text-lg">✓</span>
              </button>
            </div>
          </div>
          <button class="px-5 py-2 bg-devna-primary text-white rounded-full hover:bg-devna-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-devna-primary/50">
            {{ t.nav.getStarted }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2 text-gray-600 hover:text-devna-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            {{ link.name }}
          </router-link>
          <div class="px-4 py-2 space-y-2">
            <p class="text-xs text-gray-500 mb-2">{{ locale === 'ar' ? 'اللغة' : locale === 'fr' ? 'Langue' : 'Language' }}</p>
            <div class="flex gap-2">
              <button @click="changeLocale('en')" :class="locale==='en'?'bg-devna-primary text-white':'bg-gray-100 text-gray-700'" class="flex-1 px-3 py-1.5 rounded-lg text-sm font-medium">EN</button>
              <button @click="changeLocale('fr')" :class="locale==='fr'?'bg-devna-primary text-white':'bg-gray-100 text-gray-700'" class="flex-1 px-3 py-1.5 rounded-lg text-sm font-medium">FR</button>
              <button @click="changeLocale('ar')" :class="locale==='ar'?'bg-devna-primary text-white':'bg-gray-100 text-gray-700'" class="flex-1 px-3 py-1.5 rounded-lg text-sm font-medium">AR</button>
            </div>
          </div>
          <button class="w-full px-5 py-2 bg-devna-primary text-white rounded-lg hover:bg-devna-primary/90 transition-colors">
            {{ t.nav.getStarted }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../i18n'

const { locale, t, setLocale: changeLocaleFn, initLocale } = useI18n()

const mobileMenuOpen = ref(false)
const openLang = ref(false)

const navLinks = computed(() => [
  { name: t.value.nav.home, path: '/' },
  { name: t.value.nav.projects, path: '/projects' },
  { name: t.value.nav.about, path: '/about' },
  { name: t.value.nav.contact, path: '/contact' }
])

function changeLocale(code: 'en' | 'fr' | 'ar') {
  changeLocaleFn(code)
  openLang.value = false
}

onMounted(() => {
  initLocale()
})
</script>
