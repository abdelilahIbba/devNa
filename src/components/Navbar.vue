<template>
  <header
    class="site-header fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
    :class="scrolled
      ? 'bg-[#010217]/95 backdrop-blur-md border-b border-[#1a2740]'
      : 'bg-[#010217]/70 backdrop-blur-sm border-b border-transparent'"
  >
    <div class="page-container flex items-center justify-between gap-3 h-14 sm:h-16">
      <router-link
        to="/"
        class="flex items-center shrink-0 h-full py-1.5 group"
        aria-label="DEVNAPP home"
      >
        <BrandLogo
          variant="nav"
          size="lg"
          class="h-full max-h-10 sm:max-h-11 w-auto object-contain object-left transition-opacity duration-300 group-hover:opacity-90"
        />
      </router-link>

      <div class="hidden md:flex items-center gap-1 lg:gap-2 min-w-0">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="relative px-3 lg:px-3.5 py-2 text-sm font-medium transition-colors"
          :class="isActive(link.path) ? 'text-white' : 'text-[#9aa8bc] hover:text-white'"
        >
          {{ link.name }}
          <span
            class="absolute left-3 right-3 bottom-1 h-px bg-[#00c2ff] transition-opacity duration-300"
            :class="isActive(link.path) ? 'opacity-100' : 'opacity-0'"
          ></span>
        </router-link>

        <div class="relative ml-1" ref="langDropdownRef">
          <button
            type="button"
            @click="openLang = !openLang"
            class="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-[#9aa8bc] hover:text-white font-mono-sys transition-colors"
            aria-label="Language"
          >
            <span>{{ locale.toUpperCase() }}</span>
            <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>

          <div
            class="absolute right-0 top-full pt-2 transition-all duration-200"
            :class="openLang ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'"
          >
            <div class="border border-[#1a2740] rounded-md overflow-hidden min-w-[132px] p-1 bg-[#0c1224] shadow-xl">
              <button
                v-for="opt in langOptions"
                :key="opt.code"
                type="button"
                @click="changeLocale(opt.code)"
                class="w-full text-left px-3 py-2 text-sm rounded transition-colors flex justify-between text-[#9aa8bc] hover:bg-white/5 hover:text-white"
              >
                <span>{{ opt.label }}</span>
                <span v-if="locale === opt.code" class="text-[#00c2ff]">●</span>
              </button>
            </div>
          </div>
        </div>

        <router-link
          to="/contact"
          class="ml-2 shrink-0 px-4 py-2 rounded-md font-semibold text-sm bg-white text-[#010217] hover:bg-[#e8eef6] transition-colors"
        >
          {{ t.nav.bookCall }}
        </router-link>
      </div>

      <button
        type="button"
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 -mr-1 text-[#9aa8bc] hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-[#1a2740] bg-[#010217]/98 backdrop-blur-xl"
      >
        <div class="px-3 py-4 space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-3 py-3 rounded-md text-base text-[#9aa8bc] hover:text-white hover:bg-white/5 transition-colors"
          >
            {{ link.name }}
          </router-link>
          <div class="pt-3 border-t border-[#1a2740] flex flex-col gap-3">
            <div class="flex gap-2 px-1">
              <button
                v-for="opt in langOptions"
                :key="opt.code"
                type="button"
                @click="changeLocale(opt.code)"
                class="px-3 py-1.5 rounded text-sm bg-[#0c1224] text-[#9aa8bc]"
                :class="{ 'ring-1 ring-[#00c2ff] text-white': locale === opt.code }"
              >
                {{ opt.short }}
              </button>
            </div>
            <router-link
              to="/contact"
              @click="mobileMenuOpen = false"
              class="w-full py-3 rounded-md font-semibold text-center bg-[#00c2ff] text-[#010217]"
            >
              {{ t.nav.bookCall }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
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
