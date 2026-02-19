<template>
  <div class="min-h-screen bg-slate-950 pt-24 pb-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] animate-blob-1"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[100px] animate-blob-2"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          {{ t.about.title }} <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DevNApp</span>
        </h1>
        <p class="text-xl text-slate-300 mb-4 animate-fade-in-up delay-100">
          {{ t.about.subtitle }}
        </p>
        <p class="text-lg text-slate-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
          {{ t.about.description }}
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <!-- Profile Card -->
      <div class="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-16 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Company Logo -->
          <div class="flex justify-center">
            <div class="relative group">
              <div class="w-48 h-48 rounded-3xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500/30">
                <!-- Modern Geometric Logo -->
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  
                  <!-- Background Circle -->
                  <circle cx="100" cy="100" r="80" fill="url(#logoGradient)" opacity="0.1"/>
                  
                  <!-- Main Letter D Shape -->
                  <path d="M 60 50 L 60 150 L 100 150 C 130 150 150 130 150 100 C 150 70 130 50 100 50 Z" 
                        fill="url(#darkGradient)" class="transition-all duration-300"/>
                  
                  <!-- Inner Accent -->
                  <circle cx="110" cy="100" r="25" fill="url(#logoGradient)" opacity="0.8"/>
                  
                  <!-- Modern Lines -->
                  <rect x="75" y="75" width="40" height="3" fill="#38bdf8" rx="1.5"/>
                  <rect x="75" y="95" width="30" height="3" fill="#2563eb" rx="1.5"/>
                  <rect x="75" y="115" width="35" height="3" fill="#38bdf8" rx="1.5"/>
                </svg>
              </div>
              
              <!-- Floating Badge -->
              <div class="absolute -bottom-3 -right-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg border border-white/10">
                <span class="text-xs font-bold text-white tracking-wider">DevNApp</span>
              </div>
            </div>
          </div>

          <!-- Company Info -->
          <div class="md:col-span-2">
            <h2 class="text-3xl font-bold text-white mb-2">{{ t.about.company }}</h2>
            <p class="text-lg text-blue-400 font-semibold mb-4">{{ t.about.tagline }}</p>
            <p class="text-slate-400 leading-relaxed mb-6" v-html="t.about.intro">
            </p>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Custom Web Development -->
          <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors border-t-4 border-t-blue-500">
            <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Custom Web Development</h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Tailored web applications built from scratch to meet your specific business needs. We develop scalable, 
              high-performance solutions using modern frameworks and best practices.
            </p>
            <ul class="space-y-2 text-slate-400">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Full-stack development with modern tech stacks</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Responsive design for all devices</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Performance optimization & SEO</span>
              </li>
            </ul>
          </div>

          <!-- Ready-Made Solutions -->
          <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-colors border-t-4 border-t-purple-500">
            <div class="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Ready-Made Applications</h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Production-ready web applications that can be deployed immediately. Browse our collection of 
              pre-built solutions designed for common business needs.
            </p>
            <ul class="space-y-2 text-slate-400">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Instant deployment with documentation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Customization options available</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Ongoing support and updates</span>
              </li>
            </ul>
          </div>

          <!-- API Development -->
          <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-green-500/30 transition-colors border-t-4 border-t-green-500">
            <div class="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">API Development & Integration</h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Robust RESTful APIs and third-party integrations to connect your systems and enable seamless 
              data flow across platforms.
            </p>
            <ul class="space-y-2 text-slate-400">
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
          <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors border-t-4 border-t-cyan-500">
            <div class="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Maintenance & Support</h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Comprehensive ongoing support to keep your applications running smoothly with regular updates, 
              security patches, and performance improvements.
            </p>
            <ul class="space-y-2 text-slate-400">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Performance monitoring & optimization</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Security audits & patches</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

const { t } = useI18n()
</script>
