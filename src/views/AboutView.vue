<template>
  <div class="min-h-screen bg-[#010217] pt-16 pb-16 page-view">
    <!-- Hero Section -->
    <section class="py-16 relative overflow-hidden border-b border-[#1a2740]">
      <div class="absolute inset-0 schematic-grid opacity-40 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.1),transparent_55%)] pointer-events-none"></div>
      <div class="relative z-10 page-container">
        <div class="max-w-4xl mx-auto text-center">
        <p class="eyebrow-sys mb-4">{{ t.about.eyebrow }}</p>
        <h1 class="font-display text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          {{ t.about.title }} <span class="text-gradient">DEVNAPP</span>
        </h1>
        <p class="text-xl text-[#c8d0dc] mb-4 animate-fade-in-up delay-100">
          {{ t.about.subtitle }}
        </p>
        <p class="text-lg text-[#9aa8bc] max-w-3xl mx-auto animate-fade-in-up delay-200">
          {{ t.about.description }}
        </p>
        </div>
      </div>
    </section>

    <div class="page-container -mt-12">
      <!-- Profile Card -->
      <div class="surface-inset rounded-lg shadow-xl p-8 md:p-12 mb-16 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Company Logo -->
          <div class="flex justify-center">
            <div class="relative group">
              <div class="w-52 h-52 rounded-lg overflow-hidden border border-[#1a2740] shadow-xl bg-[#010217] flex items-center justify-center p-3 transition-all duration-300 group-hover:border-[#00c2ff]/40">
                <BrandLogo size="xl" />
              </div>
            </div>
          </div>

          <!-- Company Info -->
          <div class="md:col-span-2">
            <h2 class="text-3xl font-bold text-white mb-2">{{ t.about.company }}</h2>
            <p class="text-lg text-[#00c2ff] font-semibold mb-4">{{ t.about.tagline }}</p>
            <p class="text-[#9aa8bc] leading-relaxed mb-6" v-html="t.about.intro">
            </p>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">{{ t.about.services }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Custom Web Development -->
          <div class="surface-inset rounded-lg p-8 hover:border-[#00c2ff]/35 transition-colors border-t-4 border-t-[#00c2ff]">
            <div class="w-14 h-14 bg-[#00c2ff]/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Custom Web Development</h3>
            <p class="text-[#9aa8bc] leading-relaxed mb-4">
              Tailored web applications built from scratch to meet your specific business needs. We develop scalable, 
              high-performance solutions using modern frameworks and best practices.
            </p>
            <ul class="space-y-2 text-[#9aa8bc]">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Full-stack development with modern tech stacks</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Responsive design for all devices</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Performance optimization & SEO</span>
              </li>
            </ul>
          </div>

          <!-- Ready-Made Solutions -->
          <div class="surface-inset rounded-lg p-8 hover:border-[#00c2ff]/35 transition-colors border-t-4 border-t-[#0096e0]">
            <div class="w-14 h-14 bg-[#00c2ff]/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Ready-Made Applications</h3>
            <p class="text-[#9aa8bc] leading-relaxed mb-4">
              Production-ready web applications that can be deployed immediately. Browse our collection of 
              pre-built solutions designed for common business needs.
            </p>
            <ul class="space-y-2 text-[#9aa8bc]">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Instant deployment with documentation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Customization options available</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Ongoing support and updates</span>
              </li>
            </ul>
          </div>

          <!-- API Development -->
          <div class="surface-inset rounded-lg p-8 hover:border-emerald-400/35 transition-colors border-t-4 border-t-emerald-400">
            <div class="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">API Development & Integration</h3>
            <p class="text-[#9aa8bc] leading-relaxed mb-4">
              Robust RESTful APIs and third-party integrations to connect your systems and enable seamless 
              data flow across platforms.
            </p>
            <ul class="space-y-2 text-[#9aa8bc]">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>RESTful API design and implementation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Third-party service integration</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Secure authentication & authorization</span>
              </li>
            </ul>
          </div>

          <!-- Maintenance & Support -->
          <div class="surface-inset rounded-lg p-8 hover:border-[#00c2ff]/35 transition-colors border-t-4 border-t-[#33b4f0]">
            <div class="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Maintenance & Support</h3>
            <p class="text-[#9aa8bc] leading-relaxed mb-4">
              Comprehensive ongoing support to keep your applications running smoothly with regular updates, 
              security patches, and performance improvements.
            </p>
            <ul class="space-y-2 text-[#9aa8bc]">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Performance monitoring & optimization</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Security audits & patches</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#00c2ff] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Feature enhancements</span>
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
