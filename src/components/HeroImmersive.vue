<template>
  <section class="hero-immersive relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Parallax Background Layers -->
    <div class="parallax-container absolute inset-0">
      <!-- Layer 1: Back gradient -->
      <div class="parallax-layer layer-1 absolute inset-0" :style="{ transform: `translateY(${parallaxOffset * 0.1}px)` }">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      </div>
      
      <!-- Layer 2: Grid pattern -->
      <div class="parallax-layer layer-2 absolute inset-0" :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }">
        <svg class="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.1)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <!-- Layer 3: Particles container (tsParticles will mount here) -->
      <div class="parallax-layer layer-3 absolute inset-0" id="particles-container"></div>
      
      <!-- Layer 4: Radial glow -->
      <div 
        class="parallax-layer layer-4 absolute inset-0" 
        :style="{ 
          transform: `translate(${mouseX / 50}px, ${mouseY / 50}px)`,
          backgroundImage: `radial-gradient(circle at ${mouseX / 2}px ${mouseY / 2}px, rgba(37, 99, 235, 0.15) 0%, transparent 50%)`
        }"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <!-- Animated badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm animate-fade-in-up">
        <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span class="text-sm font-medium text-blue-300">{{ t.home.hero.badge }}</span>
      </div>

      <!-- Main headline -->
      <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-stagger-1">
        <span class="text-gradient">{{ t.home.hero.title }}</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2 font-light">
        {{ t.home.hero.subtitle }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-stagger-3">
        <router-link 
          to="/projects"
          class="btn btn-primary"
        >
          {{ t.nav.projects }}
        </router-link>
        <router-link 
          to="/about"
          class="btn btn-secondary"
        >
          {{ t.about.title }}
        </router-link>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <!-- Accent shapes (animated) -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style="animation-delay: 1s;"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const parallaxOffset = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)

let scrollHandler: (() => void) | null = null
let mouseHandler: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  // Parallax on scroll
  scrollHandler = () => {
    parallaxOffset.value = window.scrollY
  }

  // Mouse move for radial glow
  mouseHandler = (e: MouseEvent) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  }

  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('mousemove', mouseHandler)
})

onUnmounted(() => {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
  if (mouseHandler) window.removeEventListener('mousemove', mouseHandler)
})
</script>

<style scoped>
.hero-immersive {
  background-color: var(--color-dark);
  position: relative;
}

.parallax-container {
  perspective: 1000px;
}

.parallax-layer {
  will-change: transform;
  transition: transform 0.1s ease-out;
}
</style>
