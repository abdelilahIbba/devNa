<template>
  <div class="min-h-screen bg-transparent pt-24 pb-16 page-view relative">
    <!-- Backlights for About page -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[320px] bg-gradient-to-r from-[#00A8FF]/35 via-[#3B82F6]/30 to-[#1E1B4B]/40 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>
    <div class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-5xl h-[360px] bg-gradient-to-r from-[#3B82F6]/35 via-[#00A8FF]/35 to-[#1E1B4B]/45 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>

    <!-- Hero Section -->
    <section class="py-12 relative overflow-hidden bg-transparent">
      <div class="absolute inset-0 schematic-grid opacity-40 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,168,255,0.1),transparent_55%)] pointer-events-none"></div>
      <div class="relative z-10 page-container">
        <div class="max-w-4xl mx-auto text-center">
          <p class="eyebrow-sys mb-4">{{ t.about.eyebrow }}</p>
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            {{ t.about.title }} <span class="text-gradient">DEVNAPP</span>
          </h1>
          <p class="text-xl text-[#c8d0dc] mb-4 animate-fade-in-up delay-100">
            {{ t.about.subtitle }}
          </p>
          <p class="text-base sm:text-lg text-[#9aa8bc] max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {{ t.about.description }}
          </p>
        </div>
      </div>
    </section>

    <div class="page-container -mt-4 relative z-10">
      <!-- Profile Card (vision-glass-card) -->
      <div class="vision-glass-card p-8 md:p-12 mb-16 relative z-20 shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Company Logo -->
          <div class="flex justify-center">
            <div class="relative group">
              <div class="w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 group-hover:border-[#00c2ff]/40">
                <BrandLogo size="xl" />
              </div>
            </div>
          </div>

          <!-- Company Info -->
          <div class="md:col-span-2">
            <h2 class="font-display text-3xl font-bold text-white mb-2">{{ t.about.company }}</h2>
            <p class="text-lg text-[#00c2ff] font-semibold mb-4">{{ t.about.tagline }}</p>
            <p class="text-[#9aa8bc] leading-relaxed text-base" v-html="t.about.intro">
            </p>
          </div>
        </div>
      </div>

      <!-- Services Section (100% localized with .ios-glass) -->
      <div class="mb-16">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          {{ t.about.services }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            v-for="(service, idx) in t.about.servicesList"
            :key="service.title"
            class="vision-glass-card p-8 relative overflow-hidden group"
          >
            <!-- Service Icon -->
            <div class="vision-glass-inner w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/20 text-[#00c2ff] shadow-[0_0_20px_rgba(0,194,255,0.15)]">
              <!-- Icon 1: Web Dev -->
              <svg v-if="idx === 0" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <!-- Icon 2: Ready Applications -->
              <svg v-else-if="idx === 1" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <!-- Icon 3: API Integration -->
              <svg v-else-if="idx === 2" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <!-- Icon 4: Maintenance & Support -->
              <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>

            <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#00c2ff] transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-[#9aa8bc] leading-relaxed mb-5 text-sm sm:text-base">
              {{ service.description }}
            </p>

            <ul class="space-y-2.5 text-sm text-[#c8d0dc]">
              <li
                v-for="item in service.items"
                :key="item"
                class="flex items-start"
              >
                <svg class="w-4 h-4 text-[#00c2ff] mr-2.5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'
import BrandLogo from '@/components/BrandLogo.vue'

const { t } = useI18n()
</script>
