<template>
  <div 
    class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer hover-lift hover-glow"
    @click="handleClick"
  >
    <!-- Image -->
    <div class="relative overflow-hidden h-56">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Shimmer effect on hover -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div class="absolute inset-0 animate-shimmer"></div>
      </div>
      
      <!-- Tags -->
      <div class="absolute top-4 left-4 flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-devna-primary rounded-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-devna-dark mb-2 group-hover:text-devna-primary transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.technologies?.slice(0, 3)" 
          :key="tech"
          class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded hover:bg-devna-primary/10 hover:text-devna-primary transition-colors duration-200"
        >
          {{ tech }}
        </span>
        <span 
          v-if="project.technologies && project.technologies.length > 3"
          class="text-xs text-gray-500"
        >
          +{{ project.technologies.length - 3 }}
        </span>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <span class="text-sm text-gray-500">{{ project.category }}</span>
        <div class="flex items-center text-devna-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
          View Details
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  technologies?: string[]
}

const props = defineProps<{
  project: Project
}>()

const handleClick = () => {
  window.location.href = `/projects/${props.project.id}`
}
</script>
