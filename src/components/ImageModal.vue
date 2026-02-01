<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300" @click.self="$emit('close')">
    
    <!-- Close Button -->
    <button 
      @click="$emit('close')" 
      class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Previous Button -->
    <button 
      v-if="images.length > 1"
      @click.stop="prev"
      class="absolute left-4 p-3 rounded-full bg-slate-800/50 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 z-50 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Main Image Container -->
    <div class="relative max-w-7xl max-h-[90vh] p-4 flex flex-col items-center">
      <img 
        :src="currentImage" 
        class="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl shadow-blue-900/20"
        alt="Project visualization"
      />
      
      <!-- Counter/Info -->
      <div class="mt-4 text-slate-400 font-mono text-sm">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>

    <!-- Next Button -->
    <button 
      v-if="images.length > 1"
      @click.stop="next"
      class="absolute right-4 p-3 rounded-full bg-slate-800/50 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 z-50 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
  initialIndex?: number
}>()

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex || 0)

const currentImage = computed(() => props.images[currentIndex.value])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>
