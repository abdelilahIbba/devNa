<template>
  <div class="image-card-wrapper" @mouseenter="onHover" @mouseleave="onLeave">
    <div class="image-card relative overflow-hidden rounded-2xl">
      <!-- Image container with parallax -->
      <div 
        class="image-container relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden"
        :style="{ transform: `translateY(${imageParallax * 0.5}px)` }"
      >
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500"
          :style="{ transform: `scale(${isHovering ? 1.1 : 1})` }"
        />
        
        <!-- Gradient overlay with hover effect -->
        <div 
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          :style="{ opacity: isHovering ? 0.4 : 0.6 }"
        ></div>

        <!-- Glow effect on hover -->
        <div 
          v-if="isHovering"
          class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 animate-shimmer pointer-events-none"
        ></div>
      </div>

      <!-- Content overlay -->
      <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-500" 
          :style="{ transform: isHovering ? 'translateY(-10px)' : 'translateY(0)' }">
          {{ title }}
        </h3>
        <p class="text-slate-300 text-sm md:text-base mb-4 transition-all duration-500"
          :style="{ 
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateY(0)' : 'translateY(10px)'
          }"
        >
          {{ description }}
        </p>

        <!-- Tags -->
        <div class="flex gap-2 flex-wrap">
          <span 
            v-for="(tag, index) in tags" 
            :key="index"
            class="px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-medium backdrop-blur-sm border border-blue-400/30 transition-all duration-500"
            :style="{ 
              opacity: isHovering ? 1 : 0.5,
              transform: isHovering ? 'translateY(0)' : 'translateY(5px)',
              transitionDelay: `${index * 50}ms`
            }"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Border gradient effect on hover -->
      <div 
        v-if="isHovering"
        class="absolute inset-0 rounded-2xl pointer-events-none"
        :style="{
          background: `linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, transparent 50%, rgba(168, 85, 247, 0.2) 100%)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }"
      ></div>
    </div>

    <!-- Floating label -->
    <div 
      v-if="isHovering"
      class="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-sm font-medium pointer-events-none animate-bounce"
      style="animation-duration: 2s;"
    >
      View Project →
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  image: string
  title: string
  description: string
  tags: string[]
  index?: number
}

defineProps<Props>()

const isHovering = ref(false)
const imageParallax = ref(0)

const onHover = () => {
  isHovering.value = true
}

const onLeave = () => {
  isHovering.value = false
}
</script>

<style scoped>
.image-card-wrapper {
  position: relative;
}

.image-card {
  aspect-ratio: auto;
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.15);
}

.image-card:hover {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 20px 64px rgba(37, 99, 235, 0.3);
}

.image-container img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .image-card,
  .image-container img {
    transition: none;
  }
}
</style>
