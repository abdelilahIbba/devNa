<template>
  <div class="fixed bottom-5 inset-x-0 z-40 px-4 pointer-events-none">
    <div class="max-w-md mx-auto pointer-events-auto">
      <router-link
        to="/contact"
        class="w-full inline-flex items-center justify-center gap-2 rounded-full font-bold py-3.5 shadow-xl transition-all duration-300"
        :class="isDark ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/25 hover:bg-cyan-400 hover:-translate-y-0.5' : 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5'"
      >
        Book Discovery Call
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()
const isDark = computed(() => theme.value === 'dark')
</script>

<style scoped>
@media (min-width: 768px) {
  div.fixed {
    display: none;
  }
}
</style>
