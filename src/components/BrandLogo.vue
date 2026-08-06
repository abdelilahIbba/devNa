<template>
  <img
    :src="src"
    :alt="alt"
    class="w-auto object-contain select-none"
    :class="sizeClass"
    draggable="false"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import logoFull from '@/assets/logo-devnapp.png'
import logoNav from '@/assets/logo-devnapp-nav.png'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    /** Horizontal lockup for navbar; stacked mark for footer/about */
    variant?: 'nav' | 'full'
  }>(),
  {
    size: 'md',
    variant: 'full',
  },
)

const src = computed(() => (props.variant === 'nav' ? logoNav : logoFull))
const alt = 'DEVNAPP — DNA Digital Solutions'

const sizeClass = computed(() => {
  if (props.variant === 'nav') {
    const map = {
      sm: 'h-10',
      md: 'h-12',
      lg: 'h-12 sm:h-[3.35rem]',
      xl: 'h-16',
    } as const
    return map[props.size]
  }

  const map = {
    sm: 'h-14',
    md: 'h-16',
    lg: 'h-20',
    xl: 'w-full h-auto max-h-48',
  } as const
  return map[props.size]
})
</script>
