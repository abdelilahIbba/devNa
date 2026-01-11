<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white">
    <!-- Hero Immersive Section -->
    <HeroImmersive />

    <!-- Trust Strip -->
    <div class="border-y border-slate-800 bg-black/20 backdrop-blur-sm py-8 overflow-hidden">
      <div class="flex items-center justify-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 animate-marquee whitespace-nowrap">
        <span class="text-xl font-bold font-display text-slate-400">RETAIL SOLUTIONS</span>
        <span class="text-xl font-bold font-display text-slate-400">FLEET MANAGEMENT</span>
        <span class="text-xl font-bold font-display text-slate-400">POS SYSTEMS</span>
        <span class="text-xl font-bold font-display text-slate-400">INVENTORY CONTROL</span>
        <span class="text-xl font-bold font-display text-slate-400">CORPORATE CRM</span>
        <span class="text-xl font-bold font-display text-slate-400">AUTOMATION</span>
        <span class="text-xl font-bold font-display text-slate-400">RETAIL SOLUTIONS</span> <!-- Loop -->
        <span class="text-xl font-bold font-display text-slate-400">FLEET MANAGEMENT</span>
        <span class="text-xl font-bold font-display text-slate-400">POS SYSTEMS</span>
      </div>
    </div>

    <!-- Featured Projects Section (Dark Theme) -->
    <section class="py-32 relative overflow-hidden" ref="projectsSection">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-2xl reveal-text">
            <h2 class="text-sm font-mono text-blue-400 mb-2 tracking-wider uppercase">Our Work</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-4">Proven Results <span class="text-blue-500">For Real Businesses</span></h3>
            <p class="text-slate-400 text-lg">We deliver systems that solve actual operational problems.</p>
          </div>
          
          <router-link 
            to="/projects"
            class="group inline-flex items-center text-white font-semibold hover:text-blue-400 transition-colors"
          >
            All Case Studies
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>

        <!-- Projects Grid - Dark Version -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="projectsGrid">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id"
            :project="project"
            class="project-card-entrance opacity-0"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us (Bento Grid) -->
    <section class="py-32 bg-slate-900 relative" ref="featuresSection">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 max-w-3xl mx-auto reveal-text">
          <h2 class="text-sm font-mono text-blue-500 mb-2 tracking-wider uppercase">Why DevNA</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">Partners, Not Just Coders</h3>
          <p class="text-slate-400 text-lg">We focus on your business goals. Our technology is just the tool we use to get you there.</p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]" ref="bentoGrid">
          
          <!-- Large Item -->
          <div class="md:col-span-2 row-span-1 bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden bento-item opacity-0">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-white mb-2">Business Continuity</h4>
                <p class="text-slate-400">Systems designed to keep your business running smoothly 24/7. We minimize downtime so you never miss a sale.</p>
              </div>
            </div>
          </div>

          <!-- Tall Item -->
          <div class="md:col-span-1 md:row-span-2 bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors group relative overflow-hidden bento-item opacity-0">
             <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
             <div class="relative z-10 h-full flex flex-col justify-end">
                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">Secure Client Data</h4>
                <p class="text-slate-400 mb-4">We implement banking-grade security practices to protect your customer lists, financial data, and trade secrets.</p>
                <div class="h-24 w-full bg-slate-700/30 rounded-lg overflow-hidden relative">
                   <!-- Decor bar graph -->
                   <div class="absolute bottom-0 left-0 w-full flex items-end justify-between px-2 pb-2 gap-1 h-full">
                      <div class="w-full bg-purple-500/30 rounded-t h-[30%]"></div>
                      <div class="w-full bg-purple-500/40 rounded-t h-[50%]"></div>
                      <div class="w-full bg-purple-500/60 rounded-t h-[80%]"></div>
                      <div class="w-full bg-purple-500/80 rounded-t h-[60%]"></div>
                      <div class="w-full bg-purple-500 rounded-t h-[95%]"></div>
                   </div>
                </div>
             </div>
          </div>

          <!-- Standard Item -->
          <div class="md:col-span-1 bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-cyan-400/30 transition-colors group bento-item opacity-0">
            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-2">Scalable Growth</h4>
            <p class="text-slate-400 text-sm">Start with what you need, expand as you grow. Our systems handle 10 to 10M transactions equally well.</p>
          </div>

          <!-- Standard Item -->
          <div class="md:col-span-1 bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-green-400/30 transition-colors group bento-item opacity-0">
             <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-4">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <h4 class="text-xl font-bold text-white mb-2">Tailored Efficiency</h4>
             <p class="text-slate-400 text-sm">No bloatware. We build exactly what fits your specific operational workflow.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Refined CTA Section -->
    <section class="py-32 relative overflow-hidden" ref="ctaRef">
       <!-- Background mesh -->
       <div class="absolute inset-0 bg-blue-900/10 overflow-hidden">
          <div class="absolute inset-0 bg-slate-950 opacity-90 mx-auto"></div>
          <div class="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
          <div class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]"></div>
       </div>

       <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" id="cta-title">
             Ready to Scale?
          </h2>
          <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
             Don't just build a website. Build a digital asset that grows your revenue.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
             <router-link to="/contact" class="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transform hover:scale-105 transition-all shadow-2xl">
                Start Your Transformation
             </router-link>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
// Fixed import path - using custom i18n implementation, not the library
import { useI18n } from '@/i18n'
import HeroImmersive from '@/components/HeroImmersive.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()

// --- Data ---
const featuredProjects = ref([
  {
    id: 1,
    title: 'TeckMizanne POS',
    description: 'A comprehensive Point of Sale system for retail chains. Includes real-time stock sync across branches and advanced sales reporting.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80',
    category: 'Retail',
    tags: ['Best Seller', 'High Volume'],
    // Using technologies array for benefits display in card
    technologies: ['Stock Sync', 'Analytics', 'Multi-Store']
  },
  {
    id: 2,
    title: 'AutoFleet Manager',
    description: 'Car rental management platform allowing seamless booking, vehicle tracking, and automated contract generation.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    category: 'Transport',
    tags: ['Automation', 'Rental'],
    technologies: ['Booking', 'Tracking', 'Contracts']
  },
  {
    id: 3,
    title: 'ProStock Logistics',
    description: 'Warehouse optimization suite that reduced processing time by 40% for a major logistics provider.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    category: 'Logistics',
    tags: ['Efficiency', 'Scale'],
    technologies: ['Optimization', 'Reporting', 'Cloud']
  }
])

// --- Refs ---
const projectsSection = ref<HTMLElement | null>(null)
const projectsGrid = ref<HTMLElement | null>(null)
const featuresSection = ref<HTMLElement | null>(null)
const bentoGrid = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

// --- Animations ---
onMounted(() => {
  // Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === projectsSection.value && projectsGrid.value) {
           animate(projectsGrid.value.children, {
             opacity: [0, 1],
             translateY: [50, 0],
             delay: stagger(150),
             easing: 'easeOutQuad',
             duration: 800
           })
           observer.unobserve(entry.target)
        }
        
        if (entry.target === featuresSection.value && bentoGrid.value) {
            animate(bentoGrid.value.querySelectorAll('.bento-item'), {
             opacity: [0, 1],
             scale: [0.9, 1],
             delay: stagger(100),
             easing: 'easeOutExpo',
             duration: 1000
           })
           observer.unobserve(entry.target)
        }

        if (entry.target === ctaRef.value) {
           animate('#cta-title', {
              opacity: [0, 1],
              scale: [0.5, 1],
              easing: 'easeOutElastic(1, .8)',
              duration: 1200
           })
           observer.unobserve(entry.target)
        }
      }
    })
  }, observerOptions)

  if (projectsSection.value) observer.observe(projectsSection.value)
  if (featuresSection.value) observer.observe(featuresSection.value)
  if (ctaRef.value) observer.observe(ctaRef.value)
})
</script>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}


</style>
