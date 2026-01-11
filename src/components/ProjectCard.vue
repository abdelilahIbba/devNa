<template>
  <div 
    class="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer h-full flex flex-col"
    @click="handleClick"
    @mouseenter="playHoverAnim"
    @mouseleave="resetHoverAnim"
  >
    <!-- Image Section with Overlay -->
    <div class="relative h-64 overflow-hidden">
      <!-- Image -->
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transform origin-center transition-transform duration-700 will-change-transform"
        ref="imageRef"
      />
      
      <!-- Gradient Overlay (Permanent) to ensure text readability if we put text over it, but here we don't. -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
      
      <!-- Category Badge (Top Left) -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600/90 backdrop-blur-md rounded-md shadow-lg">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-8 flex flex-col flex-grow relative">
      <!-- Title -->
      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <!-- Problem/Solution (Description) -->
      <div class="relative overflow-hidden mb-6 flex-grow">
        <p class="text-slate-400 leading-relaxed text-sm">
           {{ project.description }}
        </p>
      </div>

      <!-- Business Impact / Features -->
      <div class="pt-6 border-t border-slate-800/50 mt-auto">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Impact</p>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="benefit in project.technologies?.slice(0, 3)" 
            :key="benefit"
            class="px-2.5 py-1.5 text-xs font-medium text-blue-300 bg-blue-900/20 border border-blue-900/30 rounded-md group-hover:bg-blue-900/30 transition-colors"
          >
            {{ benefit }}
          </span>
        </div>
      </div>
      
      <!-- Action Arrow (Bottom Right) -->
      <div class="absolute bottom-6 right-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { animate } from 'animejs'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  technologies?: string[] // Repurposed as Benefits/Impact
}

const props = defineProps<{
  project: Project
}>()

const imageRef = ref<HTMLElement | null>(null)

const handleClick = () => {
  // Navigation would go here
  // window.location.href = `/projects/${props.project.id}`
}

const playHoverAnim = () => {
  if (imageRef.value) {
    animate(imageRef.value, {
      scale: 1.05,
      duration: 800,
      easing: 'easeOutQuad'
    })
  }
}

const resetHoverAnim = () => {
  if (imageRef.value) {
    animate(imageRef.value, {
      scale: 1.0,
      duration: 600,
      easing: 'easeOutQuad'
    })
  }
}
</script>
