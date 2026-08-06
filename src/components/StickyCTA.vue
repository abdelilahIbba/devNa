<template>
  <div class="fixed bottom-5 inset-x-0 z-40 px-4 pointer-events-none md:hidden">
    <div class="max-w-md mx-auto pointer-events-auto">
      <router-link
        to="/contact"
        class="w-full inline-flex items-center justify-center gap-2 rounded-lg font-semibold py-3.5 bg-[#00c2ff] text-[#010217] shadow-[0_12px_28px_rgba(0,194,255,0.25)] hover:brightness-105 transition-all"
      >
        {{ t.nav.bookCall }}
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>
