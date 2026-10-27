<template>
  <div class="fixed bottom-5 inset-x-0 z-40 px-4 pointer-events-none md:hidden">
    <div class="max-w-md mx-auto pointer-events-auto">
      <router-link
        to="/contact"
        class="w-full inline-flex items-center justify-center gap-2 rounded-full font-bold py-3.5 px-6 bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217] shadow-[0_12px_32px_rgba(0,194,255,0.4)] hover:brightness-110 active:scale-95 transition-all text-sm"
      >
        <span>{{ t.nav.bookCall }}</span>
        <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>
