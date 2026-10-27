<template>
  <div class="min-h-screen bg-transparent text-[#e8eef6] home-view page-view relative">
    <HeroImmersive />

    <!-- Unified ops + proof band (Floating iOS Glass Strip) -->
    <section class="py-8 relative z-20 bg-transparent">
      <!-- Section Backlight Orb (Pierces through glass) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-4xl h-[200px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/35 to-[#1E1B4B]/40 blur-[100px] opacity-35 pointer-events-none rounded-full -z-10"></div>

      <div class="page-container max-w-6xl mx-auto">
        <div class="ios-glass-static p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <!-- Top Row: Operational Status -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/10">
            <div class="flex items-center gap-3 px-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
              <div class="min-w-0">
                <p class="font-mono-sys text-[10px] uppercase tracking-[0.14em] text-[#00c2ff]">{{ t.home.opsStatus }}</p>
                <p class="text-sm text-white font-medium mt-0.5">{{ t.home.systemsOnline }}</p>
              </div>
            </div>
            <div class="px-2">
              <p class="font-mono-sys text-[10px] uppercase tracking-[0.14em] text-[#00c2ff]">{{ t.home.focus }}</p>
              <p class="text-sm text-white font-medium mt-0.5">{{ t.home.focusValue }}</p>
            </div>
            <div class="px-2">
              <p class="font-mono-sys text-[10px] uppercase tracking-[0.14em] text-[#00c2ff]">{{ t.home.approach }}</p>
              <p class="text-sm text-white font-medium mt-0.5">{{ t.home.approachValue }}</p>
            </div>
          </div>

          <!-- Bottom Row: 4 Proof Metrics (14+, 98.9%, < 6 sem., 4.9/5) -->
          <div class="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div
              v-for="metric in proofMetrics"
              :key="metric.key"
              class="pt-3 sm:pt-0 px-2 sm:px-5 proof-card"
            >
              <p class="font-display text-3xl sm:text-4xl lg:text-[2.25rem] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00c2ff]">
                {{ metric.value }}
              </p>
              <p class="text-[#9aa8bc] text-[10px] sm:text-xs uppercase tracking-[0.14em] mt-2.5 font-mono-sys leading-snug">
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured systems -->
    <section class="py-16 sm:py-20 relative overflow-hidden bg-transparent" ref="projectsSection">
      <div class="absolute inset-0 schematic-grid opacity-30 pointer-events-none"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.06),transparent_55%)] pointer-events-none"></div>

      <!-- Section Backlight Orb (Pierces through project cards) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-5xl h-[280px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/35 to-[#1E1B4B]/45 blur-[100px] opacity-35 pointer-events-none rounded-full -z-10"></div>

      <div class="page-container relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div class="max-w-2xl reveal-text">
            <p class="eyebrow-sys mb-3">{{ t.home.work.eyebrow }}</p>
            <h3 class="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {{ t.home.work.title }}
              <span class="text-gradient"> {{ t.home.work.titleHighlight }}</span>
            </h3>
            <p class="text-[#9aa8bc] text-lg">
              {{ t.home.work.subtitle }}
            </p>
          </div>

          <router-link
            to="/projects"
            class="group inline-flex items-center text-white font-semibold hover:text-[#00c2ff] transition-colors"
          >
            {{ t.common.allCaseStudies }}
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref="projectsGrid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            class="project-card-entrance"
          />
        </div>
      </div>
    </section>

    <!-- Delivery method -->
    <section class="py-24 border-y border-white/10 bg-transparent relative">
      <!-- Section Backlight Orb (Pierces through delivery steps) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-4xl h-[250px] bg-gradient-to-r from-[#3B82F6]/40 via-[#00A8FF]/35 to-[#1E1B4B]/40 blur-[100px] opacity-35 pointer-events-none rounded-full -z-10"></div>

      <div class="page-container relative z-10">
        <div class="mb-12 max-w-2xl">
          <p class="eyebrow-sys mb-3">{{ t.home.delivery.eyebrow }}</p>
          <h3 class="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            {{ t.home.delivery.title }}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="step in deliverySteps"
            :key="step.title"
            class="ios-glass p-8"
          >
            <p class="font-mono-sys text-xs text-[#00c2ff] uppercase tracking-[0.16em] mb-4">{{ step.phase }}</p>
            <h4 class="font-display text-white text-xl font-bold mb-3">{{ step.title }}</h4>
            <p class="text-[#9aa8bc] text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why systems partners (Conçu comme pensent les opérateurs) -->
    <section class="py-28 relative bg-transparent" ref="featuresSection">
      <!-- Section Backlight Orb (Pierces through bento cards) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl h-[340px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/35 to-[#1E1B4B]/45 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>

      <div class="page-container relative z-10">
        <div class="mb-16 max-w-2xl reveal-text">
          <p class="eyebrow-sys mb-3">{{ t.home.why.eyebrow }}</p>
          <h3 class="font-display text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            {{ t.home.why.title }}
          </h3>
          <p class="text-[#9aa8bc] text-lg">
            {{ t.home.why.subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]" ref="bentoGrid">
          <div class="md:col-span-2 ios-glass p-8 group relative overflow-hidden bento-item">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,168,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 h-full flex flex-col justify-between gap-8">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#00c2ff]/10 flex items-center justify-center text-[#00c2ff] shadow-[0_0_16px_rgba(0,194,255,0.2)]">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h4 class="font-display text-2xl font-bold text-white mb-2">{{ t.home.why.items[0].title }}</h4>
                <p class="text-[#9aa8bc] max-w-lg leading-relaxed">{{ t.home.why.items[0].body }}</p>
              </div>
            </div>
          </div>

          <div class="md:col-span-1 md:row-span-2 ios-glass p-8 group relative overflow-hidden bento-item">
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#00c2ff]/10 flex items-center justify-center text-[#00c2ff] mb-6 shadow-[0_0_16px_rgba(0,194,255,0.2)]">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div>
                <h4 class="font-display text-2xl font-bold text-white mb-2">{{ t.home.why.items[1].title }}</h4>
                <p class="text-[#9aa8bc] mb-6 leading-relaxed">{{ t.home.why.items[1].body }}</p>
                <div class="h-28 w-full border border-white/10 bg-[#010217]/60 rounded-xl overflow-hidden relative">
                  <div class="absolute bottom-0 left-0 w-full flex items-end justify-between px-3 pb-2 gap-1.5 h-full">
                    <div class="w-full bg-[#00c2ff]/25 rounded-t-sm h-[28%]"></div>
                    <div class="w-full bg-[#00c2ff]/35 rounded-t-sm h-[48%]"></div>
                    <div class="w-full bg-[#00c2ff]/55 rounded-t-sm h-[72%]"></div>
                    <div class="w-full bg-[#00c2ff]/75 rounded-t-sm h-[58%]"></div>
                    <div class="w-full bg-[#00c2ff] rounded-t-sm h-[90%] shadow-[0_0_12px_rgba(0,194,255,0.6)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ios-glass p-8 group bento-item">
            <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#00c2ff]/10 flex items-center justify-center text-[#00c2ff] mb-5 shadow-[0_0_16px_rgba(0,194,255,0.2)]">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 class="font-display text-xl font-bold text-white mb-2">{{ t.home.why.items[2].title }}</h4>
            <p class="text-[#9aa8bc] text-sm leading-relaxed">{{ t.home.why.items[2].body }}</p>
          </div>

          <div class="ios-glass p-8 group bento-item">
            <div class="w-12 h-12 rounded-xl border border-white/10 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 shadow-[0_0_16px_rgba(52,211,153,0.2)]">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 class="font-display text-xl font-bold text-white mb-2">{{ t.home.why.items[3].title }}</h4>
            <p class="text-[#9aa8bc] text-sm leading-relaxed">{{ t.home.why.items[3].body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Voices -->
    <section class="py-24 border-t border-white/10 relative bg-transparent">
      <!-- Section Backlight Orb (Pierces through client quotes) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-4xl h-[240px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/30 to-[#1E1B4B]/40 blur-[100px] opacity-35 pointer-events-none rounded-full -z-10"></div>

      <div class="page-container relative z-10">
        <div class="mb-12">
          <p class="eyebrow-sys mb-3">{{ t.home.voices.eyebrow }}</p>
          <h3 class="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            {{ t.home.voices.title }}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="quote in testimonials"
            :key="quote.author"
            class="ios-glass p-8 border-l-4 border-l-[#00c2ff]"
          >
            <p class="text-[#c8d0dc] leading-relaxed mb-6 text-lg">“{{ quote.text }}”</p>
            <div>
              <p class="text-white font-semibold">{{ quote.author }}</p>
              <p class="text-[#9aa8bc] text-sm font-mono-sys mt-1">{{ quote.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-28 relative overflow-hidden" ref="ctaRef">
      <div class="absolute inset-0 schematic-grid opacity-40"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.12),transparent_60%)]"></div>

      <div class="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p class="eyebrow-sys mb-4 justify-center inline-flex">{{ t.home.cta.eyebrow }}</p>
        <h2 id="cta-title" class="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {{ t.home.cta.title }}
        </h2>
        <p class="text-lg text-[#9aa8bc] mb-10 max-w-xl mx-auto">
          {{ t.home.cta.subtitle }}
        </p>
        <router-link to="/contact" class="btn-sys btn-sys-primary text-base px-8 py-4">
          {{ t.home.cta.button }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
import { useI18n } from '@/i18n'
import HeroImmersive from '@/components/HeroImmersive.vue'
import ProjectCard from '@/components/ProjectCard.vue'

import tm1 from '@/assets/tickMizane/TeckMizanne1.png'
import tm2 from '@/assets/tickMizane/TeckMizanne2.png'
import tm3 from '@/assets/tickMizane/TeckMizanne3.png'
import tm4 from '@/assets/tickMizane/TeckMizanne4.png'
import af1 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145154.png'
import af2 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145214.png'
import af3 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145330.png'
import af4 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145343.png'
import af5 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145352.png'

const { t, locale } = useI18n()

const featuredProjects = ref([
  {
    id: 1,
    title: 'TeckMizanne POS',
    description: 'A comprehensive Point of Sale system for retail chains. Includes real-time stock sync across branches and advanced sales reporting.',
    image: tm1,
    images: [tm1, tm2, tm3, tm4],
    category: 'Retail',
    tags: ['Best Seller', 'High Volume'],
    technologies: ['Stock Sync', 'Analytics', 'Multi-Store'],
    result: 'Reduced checkout waiting time by 37% across 4 stores'
  },
  {
    id: 2,
    title: 'AutoFleet Manager',
    description: 'Car rental management platform allowing seamless booking, vehicle tracking, and automated contract generation.',
    image: af1,
    images: [af1, af2, af3, af4, af5],
    category: 'Transport',
    tags: ['Automation', 'Rental'],
    technologies: ['Booking', 'Tracking', 'Contracts'],
    previewUrl: 'https://atellasfleetdeploy.vercel.app/',
    previewBrand: 'AtellasFleet',
    previewHeadline: 'Premium Car Rental Platform',
    previewSummary: 'Professional web experience for reservation flow, real-time fleet visibility, and operations dashboard in one unified system.',
    previewStats: [
      { label: 'Fleet Availability', value: '94%' },
      { label: 'Booking Flow', value: '< 2 min' },
      { label: 'Cities Covered', value: '5' }
    ],
    result: 'Increased completed bookings by 42% in 90 days'
  },
  {
    id: 3,
    title: 'ProStock Logistics',
    description: 'Warehouse optimization suite that reduced processing time by 40% for a major logistics provider.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    category: 'Logistics',
    tags: ['Efficiency', 'Scale'],
    technologies: ['Optimization', 'Reporting', 'Cloud'],
    result: 'Cut order handling cycle time by 40%'
  }
])

const proofMetrics = computed(() => {
  const mvpValue =
    locale.value === 'fr' ? '< 6 sem.' : locale.value === 'ar' ? '< 6 أسابيع' : '< 6 Weeks'

  return [
    { key: 'systems', value: '14+', label: t.value.home.metrics.systems },
    { key: 'uptime', value: '98.9%', label: t.value.home.metrics.uptime },
    { key: 'mvp', value: mvpValue, label: t.value.home.metrics.mvp },
    { key: 'satisfaction', value: '4.9/5', label: t.value.home.metrics.satisfaction },
  ]
})

const deliverySteps = computed(() => t.value.home.delivery.steps)

const testimonials = computed(() => t.value.home.voices.quotes)

const projectsSection = ref<HTMLElement | null>(null)
const projectsGrid = ref<HTMLElement | null>(null)
const featuresSection = ref<HTMLElement | null>(null)
const bentoGrid = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    if (projectsGrid.value) {
      Array.from(projectsGrid.value.children).forEach((item) => {
        ;(item as HTMLElement).style.opacity = '1'
      })
    }
    if (bentoGrid.value) {
      bentoGrid.value.querySelectorAll('.bento-item').forEach((item) => {
        ;(item as HTMLElement).style.opacity = '1'
      })
    }
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return

      if (entry.target === projectsSection.value && projectsGrid.value) {
        animate(projectsGrid.value.children, {
          opacity: [0, 1],
          translateY: [40, 0],
          delay: stagger(120),
          easing: 'easeOutQuad',
          duration: 700
        })
        observer.unobserve(entry.target)
      }

      if (entry.target === featuresSection.value && bentoGrid.value) {
        animate(bentoGrid.value.querySelectorAll('.bento-item'), {
          opacity: [0, 1],
          translateY: [28, 0],
          delay: stagger(90),
          easing: 'easeOutExpo',
          duration: 800
        })
        observer.unobserve(entry.target)
      }

      if (entry.target === ctaRef.value) {
        animate('#cta-title', {
          opacity: [0, 1],
          translateY: [20, 0],
          easing: 'easeOutExpo',
          duration: 800
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  if (projectsSection.value) observer.observe(projectsSection.value)
  if (featuresSection.value) observer.observe(featuresSection.value)
  if (ctaRef.value) observer.observe(ctaRef.value)
})
</script>
<style scoped>
.proof-card {
  transition: background-color 0.25s ease;
}

.proof-card:hover {
  background-color: rgba(0, 194, 255, 0.04);
}
</style>

