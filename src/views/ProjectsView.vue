<template>
  <div class="min-h-screen bg-[#010217] pt-16 pb-16 page-view">
    <div class="page-container">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-4 font-display">
          {{ t.projects.title }}
        </h1>
        <p class="text-xl text-[#9aa8bc] max-w-2xl mx-auto">
          {{ t.projects.subtitle }}
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2 rounded-lg font-medium transition-all duration-300 border',
            selectedCategory === category 
              ? 'bg-[#00c2ff] border-[#00c2ff] text-[#010217]' 
              : 'bg-slate-900/50 border-slate-800 text-[#9aa8bc] hover:bg-slate-800 hover:text-white hover:border-slate-700'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="projectsGrid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
          class="opacity-0 translate-y-4" 
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <svg class="w-24 h-24 mx-auto text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
        <h3 class="text-xl font-semibold text-[#9aa8bc] mb-2">No case studies found</h3>
        <p class="text-slate-500">Try selecting a different industry</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useI18n } from '@/i18n'
import { animate, stagger } from 'animejs'

import tm1 from '@/assets/tickMizane/TeckMizanne1.png'
import tm2 from '@/assets/tickMizane/TeckMizanne2.png'
import tm3 from '@/assets/tickMizane/TeckMizanne3.png'
import tm4 from '@/assets/tickMizane/TeckMizanne4.png'
import af1 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145154.png'
import af2 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145214.png'
import af3 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145330.png'
import af4 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145343.png'
import af5 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145352.png'

const { t } = useI18n()

// Simplified categories for business focus
const categories = computed(() => [
  'All Sectors',
  'Retail',
  'Transport',
  'Logistics',
  'Corporate'
])
const selectedCategory = ref('All Sectors')

// Real-world focused data
const projects = ref([
  {
    id: 1,
    title: 'TeckMizanne POS',
    description: 'A complete retail management ecosystem for a multi-outlet franchise. Enabled centralized stock control and real-time sales tracking.',
    image: tm1,
    images: [tm1, tm2, tm3, tm4],
    category: 'Retail',
    tags: ['High Volume'],
    technologies: ['Stock Sync', 'Reporting']
  },
  {
    id: 2,
    title: 'AutoFleet Manager',
    description: 'Digital transformation for a vehicle rental agency. Automated bookings, fleet maintenance tracking, and customer contracts.',
    image: af1,
    images: [af1, af2, af3, af4, af5],
    category: 'Transport',
    tags: ['Automation'],
    technologies: ['Booking', 'Fleet', 'Cloud'],
    previewUrl: 'https://atellasfleetdeploy.vercel.app/',
    previewBrand: 'AtellasFleet',
    previewHeadline: 'Premium Car Rental Platform',
    previewSummary: 'Professional web experience for reservation flow, real-time fleet visibility, and operations dashboard in one unified system.',
    previewStats: [
      { label: 'Fleet Availability', value: '94%' },
      { label: 'Booking Flow', value: '< 2 min' },
      { label: 'Cities Covered', value: '5' }
    ]
  },
  {
    id: 3,
    title: 'ProStock Logistics',
    description: 'Warehouse optimization suite reducing order processing time by 40%.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    category: 'Logistics',
    tags: ['Scale'],
    technologies: ['Efficiency', 'Tracking']
  },
  {
    id: 4,
    title: 'MediCare CRM',
    description: 'Secure patient management system for a private clinic network. Improved appointment scheduling efficiency by 60%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'Corporate',
    tags: ['Healthcare'],
    technologies: ['Security', 'Scheduling']
  },
  {
    id: 5,
    title: 'CityReal Estate',
    description: 'Property management portal enabling virtual tours and automated tenant screening.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Corporate',
    tags: ['Real Estate'],
    technologies: ['Virtual Tour', 'Portal']
  },
  {
    id: 6,
    title: 'FoodChain Supply',
    description: 'Supply chain transparency tool for a food distributor. Tracked provenance from farm to table.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    category: 'Logistics',
    tags: ['Supply Chain'],
    technologies: ['IoT', 'Tracking']
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All Sectors') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})

const projectsGrid = ref<HTMLElement | null>(null)

const animateItems = () => {
    if(!projectsGrid.value) return
    
    // Reset opacity first
    const items = projectsGrid.value.children
    animate(items, {
      opacity: 0,
      translateY: 20,
      duration: 0
    })

    animate(items, {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(100),
        easing: 'easeOutQuad',
        duration: 600
    })
}

// Re-run animation on filter change
watch(selectedCategory, () => {
    nextTick(() => {
        animateItems()
    })
})

onMounted(() => {
    nextTick(() => {
        animateItems()
    })
})
</script>
