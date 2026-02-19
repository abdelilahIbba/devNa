<template>
  <div 
    class="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer h-full flex flex-col"
    @click="handleClick"
    @mouseenter="playHoverAnim"
    @mouseleave="resetHoverAnim"
  >
    <!-- Image Section with Overlay -->
    <div class="relative h-64 overflow-hidden" @click.stop="openModal">
      <!-- Image -->
      <img 
        :src="displayImage" 
        :alt="project.title"
        class="w-full h-full object-cover transform origin-center transition-transform duration-700 will-change-transform"
        ref="imageRef"
      />
      
      <!-- Gradient Overlay (Permanent) to ensure text readability if we put text over it, but here we don't. -->
      <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
      
      <!-- Category Badge (Top Left) -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600/90 backdrop-blur-md rounded-md shadow-lg">
          {{ project.category }}
        </span>
      </div>

      <!-- Image Navigation Dots -->
      <div 
        v-if="project.images && project.images.length > 1"
        class="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10"
        @click.stop
      >
        <button 
          v-for="(_, index) in project.images" 
          :key="index"
          @click.prevent="setImage(index)"
          class="h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm"
          :class="activeImageIndex === index ? 'bg-blue-500 w-6' : 'bg-white/50 hover:bg-white w-1.5'"
        ></button>
      </div>

      <!-- Expand Icon (Top Right) -->
      <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          class="p-2 bg-black/50 hover:bg-blue-600/80 backdrop-blur-md rounded-full text-white transition-colors"
          title="View Fullscreen"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Image Modal -->
    <Teleport to="body">
      <ImageModal 
        v-if="showModal"
        :images="project.images || [project.image]"
        :initial-index="activeImageIndex"
        :project-url="project.previewUrl"
        :project-title="project.title"
        :project-description="project.description"
        :project-category="project.category"
        :project-technologies="project.technologies"
        :project-preview-brand="project.previewBrand"
        :project-preview-headline="project.previewHeadline"
        :project-preview-summary="project.previewSummary"
        :project-preview-stats="project.previewStats"
        @close="showModal = false"
      />
    </Teleport>

    <!-- Content Section -->
    <div class="p-8 flex flex-col grow relative">
      <!-- Title -->
      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <!-- Problem/Solution (Description) -->
      <div class="relative overflow-hidden mb-6 grow">
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
import { ref, computed } from 'vue'
import { animate } from 'animejs'
import ImageModal from './ImageModal.vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  images?: string[]
  category: string
  tags: string[]
  technologies?: string[] // Repurposed as Benefits/Impact
  previewUrl?: string
  previewBrand?: string
  previewHeadline?: string
  previewSummary?: string
  previewStats?: Array<{ label: string; value: string }>
}

const props = defineProps<{
  project: Project
}>()

const imageRef = ref<HTMLElement | null>(null)
const activeImageIndex = ref(0)
const showModal = ref(false)

const displayImage = computed(() => {
  if (props.project.images && props.project.images.length > 0) {
    return props.project.images[activeImageIndex.value]
  }
  return props.project.image
})

const setImage = (index: number) => {
  activeImageIndex.value = index
}

const openModal = () => {
  showModal.value = true
}

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
