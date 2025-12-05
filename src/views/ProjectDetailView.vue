<template>
  <div class="min-h-screen bg-devna-light pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center space-x-2 text-sm mb-8">
        <router-link to="/projects" class="text-gray-500 hover:text-devna-primary">Projects</router-link>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span class="text-devna-dark font-medium">{{ project.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Project Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-6 left-6 flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-4 py-2 bg-white/90 backdrop-blur-sm text-sm font-semibold text-devna-primary rounded-full shadow-lg"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Project Title & Description -->
          <div>
            <h1 class="text-4xl sm:text-5xl font-bold text-devna-dark mb-4">{{ project.title }}</h1>
            <p class="text-lg text-gray-600 leading-relaxed">{{ project.fullDescription }}</p>
          </div>

          <!-- Features -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-devna-dark mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2 text-devna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Key Features
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="feature in project.features" 
                :key="feature"
                class="flex items-start space-x-3"
              >
                <svg class="w-5 h-5 text-devna-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-devna-dark mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2 text-devna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Technologies Used
            </h2>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-4 py-2 bg-gradient-to-r from-devna-primary/10 to-devna-accent/10 text-devna-primary font-medium rounded-lg border border-devna-primary/20 hover:border-devna-primary/50 transition-colors"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Screenshots / Gallery -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-devna-dark mb-6">Screenshots</h2>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(screenshot, index) in project.screenshots" 
                :key="index"
                class="aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img 
                  :src="screenshot"
                  :alt="`${project.title} Screenshot ${index + 1}`"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Pricing Card -->
          <div class="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
            <div class="text-center mb-6">
              <div class="text-sm text-gray-500 mb-2">Starting at</div>
              <div class="text-5xl font-bold text-devna-dark mb-1">
                ${{ project.price }}
              </div>
              <div class="text-sm text-gray-500">one-time payment</div>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex items-center space-x-3 text-sm text-gray-700">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Full source code included</span>
              </div>
              <div class="flex items-center space-x-3 text-sm text-gray-700">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Lifetime updates</span>
              </div>
              <div class="flex items-center space-x-3 text-sm text-gray-700">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>6 months support</span>
              </div>
              <div class="flex items-center space-x-3 text-sm text-gray-700">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Documentation</span>
              </div>
            </div>

            <div class="space-y-3">
              <button class="w-full px-6 py-4 bg-devna-primary hover:bg-devna-primary/90 text-white rounded-full font-semibold shadow-lg shadow-devna-primary/30 hover:shadow-devna-primary/50 transition-all duration-300 transform hover:scale-105">
                Purchase Now
              </button>
              <button class="w-full px-6 py-4 bg-white hover:bg-gray-50 text-devna-primary border-2 border-devna-primary rounded-full font-semibold transition-all duration-300">
                Live Demo
              </button>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="text-sm text-gray-600 mb-3">Need customization?</div>
              <router-link 
                to="/contact"
                class="flex items-center justify-center space-x-2 text-devna-primary font-medium hover:text-devna-primary/80 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span>Contact Us</span>
              </router-link>
            </div>
          </div>

          <!-- Stats -->
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="font-bold text-devna-dark mb-4">Project Stats</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Category</span>
                <span class="text-sm font-semibold text-devna-dark">{{ project.category }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Downloads</span>
                <span class="text-sm font-semibold text-devna-dark">150+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Rating</span>
                <span class="text-sm font-semibold text-devna-dark">4.9/5.0</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Last Updated</span>
                <span class="text-sm font-semibold text-devna-dark">Dec 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// In a real app, fetch this based on route.params.id
const project = ref({
  id: 1,
  title: 'E-Commerce Dashboard',
  description: 'Complete admin dashboard for managing online stores',
  fullDescription: 'A comprehensive e-commerce admin dashboard that provides everything you need to manage your online store. Features include inventory management, order processing, customer analytics, sales reports, and much more. Built with modern technologies and designed for scalability.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  category: 'Business Tools',
  tags: ['Featured', 'Popular', 'Best Seller'],
  price: 499,
  technologies: ['Vue.js 3', 'Laravel 10', 'Tailwind CSS', 'MySQL', 'Redis', 'Chart.js'],
  screenshots: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  ],
  features: [
    'Advanced inventory management',
    'Real-time order tracking',
    'Customer analytics dashboard',
    'Sales and revenue reports',
    'Multi-currency support',
    'Email notifications',
    'Product import/export',
    'Role-based access control',
    'Mobile responsive design',
    'Dark mode support',
    'RESTful API included',
    'Automated backups'
  ]
})
</script>
