<template>
  <div class="min-h-screen bg-devna-light pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-devna-dark mb-4">
          <span v-html="t.projects.title"></span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
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
            'px-6 py-2 rounded-full font-medium transition-all duration-300',
            selectedCategory === category 
              ? 'bg-devna-primary text-white shadow-lg shadow-devna-primary/30' 
              : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
        <p class="text-gray-500">Try selecting a different category</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const categories = computed(() => [
  t.value.projects.filter.all,
  'Web Apps',
  'Dashboards',
  'Business Tools',
  'E-Commerce'
])
const selectedCategory = ref(t.value.projects.filter.all)

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Complete admin dashboard for managing online stores with inventory, orders, and analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Business Tools',
    tags: ['Featured', 'Popular'],
    technologies: ['Vue.js', 'Laravel', 'Tailwind', 'MySQL']
  },
  {
    id: 2,
    title: 'Project Management System',
    description: 'Powerful tool for teams to collaborate, track tasks, and manage projects efficiently.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    category: 'Dashboards',
    tags: ['New', 'Trending'],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind']
  },
  {
    id: 3,
    title: 'CRM Application',
    description: 'Customer relationship management system with lead tracking and sales pipeline.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Web Apps',
    tags: ['Best Seller'],
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 4,
    title: 'Inventory Management',
    description: 'Track stock levels, manage suppliers, and automate reordering processes.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    category: 'Business Tools',
    tags: ['New'],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind']
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and reporting with customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Dashboards',
    tags: ['Popular'],
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'Tailwind']
  },
  {
    id: 6,
    title: 'Online Store Platform',
    description: 'Full-featured e-commerce solution with payment integration and order management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    category: 'E-Commerce',
    tags: ['Featured'],
    technologies: ['Vue.js', 'Laravel', 'Stripe', 'Tailwind']
  },
  {
    id: 7,
    title: 'Task Management App',
    description: 'Organize tasks, set deadlines, and collaborate with your team seamlessly.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    category: 'Web Apps',
    tags: ['Trending'],
    technologies: ['Vue.js', 'Firebase', 'Tailwind']
  },
  {
    id: 8,
    title: 'Invoice Generator',
    description: 'Create professional invoices, track payments, and manage clients efficiently.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    category: 'Business Tools',
    tags: ['New'],
    technologies: ['Vue.js', 'Laravel', 'PDF.js', 'Tailwind']
  },
  {
    id: 9,
    title: 'Multi-Vendor Marketplace',
    description: 'Complete marketplace solution with vendor management and commission tracking.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    category: 'E-Commerce',
    tags: ['Best Seller'],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind']
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === t.value.projects.filter.all || selectedCategory.value === 'All' || selectedCategory.value === 'Tous les Projets' || selectedCategory.value === 'جميع المشاريع') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})
</script>
