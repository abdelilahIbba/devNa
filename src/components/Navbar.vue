<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-8 h-8 bg-gradient-to-br from-devna-primary to-devna-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-devna-dark">DevNA</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-600 hover:text-devna-primary font-medium transition-colors duration-300 relative group"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-devna-primary group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <button class="px-5 py-2 bg-devna-primary text-white rounded-full hover:bg-devna-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-devna-primary/50">
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2 text-gray-600 hover:text-devna-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            {{ link.name }}
          </router-link>
          <button class="w-full px-5 py-2 bg-devna-primary text-white rounded-lg hover:bg-devna-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>
