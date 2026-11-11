<template>
  <div class="fixed top-0 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
    <header
      class="site-header ios-glass-pill pointer-events-auto w-full max-w-[960px] mx-auto rounded-full transition-all duration-300"
    >
      <div class="flex items-center justify-between gap-3 h-14 sm:h-16 px-4 sm:px-6">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center shrink-0 h-full py-1.5 group"
          aria-label="DEVNAPP home"
        >
          <BrandLogo
            variant="nav"
            size="md"
            class="h-full max-h-9 sm:max-h-10 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
          />
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-1.5 min-w-0" aria-label="Main Navigation">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200"
            :class="isActive(link.path)
              ? 'vision-glass-inner bg-white/12 text-white shadow-xs border border-white/15'
              : 'text-[#9aa8bc] hover:text-white hover:bg-white/5'"
          >
            {{ link.name }}
            <span
              v-if="isActive(link.path)"
              class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 rounded-full bg-[#00c2ff]"
            ></span>
          </router-link>

          <!-- Language Selector -->
          <div class="relative ml-1" ref="langDropdownRef">
            <button
              type="button"
              @click="openLang = !openLang"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#9aa8bc] hover:text-white hover:bg-white/5 font-mono-sys transition-colors border border-transparent hover:border-white/10"
              aria-label="Language"
            >
              <span>{{ locale.toUpperCase() }}</span>
              <svg class="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              class="absolute right-0 top-full pt-2 transition-all duration-200"
              :class="openLang ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'"
            >
              <div class="vision-glass-card border border-white/20 rounded-xl overflow-hidden min-w-[136px] p-1.5 backdrop-blur-xl shadow-2xl">
                <button
                  v-for="opt in langOptions"
                  :key="opt.code"
                  type="button"
                  @click="changeLocale(opt.code)"
                  class="w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors flex justify-between items-center text-[#9aa8bc] hover:bg-white/10 hover:text-white"
                >
                  <span>{{ opt.label }}</span>
                  <span v-if="locale === opt.code" class="text-[#00c2ff] text-xs">●</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Book Discovery Call Pill CTA -->
          <router-link
            to="/contact"
            class="ml-2 shrink-0 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217] hover:brightness-110 shadow-[0_0_20px_rgba(0,194,255,0.25)] transition-all transform hover:scale-[1.02]"
          >
            {{ t.nav.bookCall }}
          </router-link>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-[#9aa8bc] hover:text-white hover:bg-white/5 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Dropdown Island -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="pointer-events-auto w-full max-w-[960px] mx-auto mt-2 vision-glass-card rounded-2xl shadow-2xl p-4"
      >
        <div class="space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
            :class="isActive(link.path)
              ? 'bg-white/10 text-white font-semibold'
              : 'text-[#9aa8bc] hover:text-white hover:bg-white/5'"
          >
            {{ link.name }}
          </router-link>

          <div class="pt-3 mt-2 border-t border-white/10 flex flex-col gap-3">
            <div class="flex gap-2 px-1">
              <button
                v-for="opt in langOptions"
                :key="opt.code"
                type="button"
                @click="changeLocale(opt.code)"
                class="flex-1 py-1.5 rounded-lg text-xs font-mono-sys font-medium transition-colors"
                :class="locale === opt.code
                  ? 'bg-[#00c2ff]/20 text-[#00c2ff] border border-[#00c2ff]/30'
                  : 'bg-white/5 text-[#9aa8bc] hover:text-white'"
              >
                {{ opt.short }}
              </button>
            </div>
            <router-link
              to="/contact"
              @click="mobileMenuOpen = false"
              class="w-full py-2.5 rounded-xl font-semibold text-center text-sm bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217]"
            >
              {{ t.nav.bookCall }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n'
import type { Locale } from '@/i18n/translations'
import { useRoute } from 'vue-router'
import BrandLogo from '@/components/BrandLogo.vue'

const { t, locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)
const openLang = ref(false)
const scrolled = ref(false)
const route = useRoute()
const langDropdownRef = ref<HTMLElement | null>(null)

const langOptions = [
  { code: 'fr' as Locale, label: 'Français', short: 'FR' },
  { code: 'en' as Locale, label: 'English', short: 'EN' },
  { code: 'ar' as Locale, label: 'العربية', short: 'AR' },
]

const navLinks = computed(() => [
  { name: t.value.nav?.home || 'Home', path: '/' },
  { name: t.value.nav?.projects || 'Projects', path: '/projects' },
  { name: t.value.nav?.about || 'About', path: '/about' },
  { name: t.value.nav?.contact || 'Contact', path: '/contact' },
])

const changeLocale = (newLocale: Locale) => {
  setLocale(newLocale)
  openLang.value = false
}

const isActive = (path: string) => route.path === path

const handleScroll = () => {
  scrolled.value = window.scrollY > 12
}

const handleOutsideClick = (event: MouseEvent) => {
  if (!openLang.value) return
  const target = event.target as Node
  if (langDropdownRef.value && !langDropdownRef.value.contains(target)) {
    openLang.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
})
</script>
