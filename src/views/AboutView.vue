<template>
  <div class="min-h-screen bg-devna-light pt-24 pb-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-devna-dark to-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-devna-accent rounded-full blur-3xl animate-blob-1"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-devna-primary rounded-full blur-3xl animate-blob-2"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          {{ t.about.title }} <span class="text-gradient bg-gradient-to-r from-devna-accent to-blue-400 bg-clip-text text-transparent">DevNA</span>
        </h1>
        <p class="text-xl text-gray-300 mb-4 animate-fade-in-up delay-100">
          {{ t.about.subtitle }}
        </p>
        <p class="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
          {{ t.about.description }}
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <!-- Profile Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Company Logo -->
          <div class="flex justify-center">
            <div class="relative group">
              <div class="w-48 h-48 rounded-3xl overflow-hidden border-4 border-devna-primary/20 shadow-xl bg-white flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-devna-primary/40">
                <!-- Modern Geometric Logo -->
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
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
              <div class="absolute -bottom-3 -right-3 px-4 py-2 bg-gradient-to-r from-devna-primary to-devna-accent rounded-full shadow-lg">
                <span class="text-xs font-bold text-white tracking-wider">DevNA</span>
              </div>
            </div>
          </div>

          <!-- Company Info -->
          <div class="md:col-span-2">
            <h2 class="text-3xl font-bold text-devna-dark mb-2">{{ t.about.company }}</h2>
            <p class="text-lg text-devna-primary font-semibold mb-4">{{ t.about.tagline }}</p>
            <p class="text-gray-600 leading-relaxed mb-6" v-html="t.about.intro">
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="https://github.com/abdelilahIbba" target="_blank" class="px-4 py-2 bg-devna-dark text-white rounded-lg hover:bg-devna-dark/90 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/abdelilah-el-ibbawi-7747052a9/" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-devna-dark mb-8 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Custom Web Development -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-devna-primary">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-devna-dark mb-3">Custom Web Development</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Tailored web applications built from scratch to meet your specific business needs. We develop scalable, 
              high-performance solutions using modern frameworks and best practices.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Full-stack development with modern tech stacks</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Responsive design for all devices</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Performance optimization & SEO</span>
              </li>
            </ul>
          </div>

          <!-- Ready-Made Solutions -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-devna-accent">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-accent to-blue-400 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-devna-dark mb-3">Ready-Made Applications</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Production-ready web applications that can be deployed immediately. Browse our collection of 
              pre-built solutions designed for common business needs.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Instant deployment with documentation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Customization options available</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-devna-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Ongoing support and updates</span>
              </li>
            </ul>
          </div>

          <!-- API Development -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-devna-dark mb-3">API Development & Integration</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Robust RESTful APIs and third-party integrations to connect your systems and enable seamless 
              data flow across platforms.
            </p>
            <ul class="space-y-2 text-gray-600">
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
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-devna-dark mb-3">Maintenance & Support</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Comprehensive ongoing support to keep your applications running smoothly with regular updates, 
              security patches, and performance improvements.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Regular security updates</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Bug fixes and troubleshooting</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>24/7 technical support available</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-devna-dark mb-8 text-center mt-16">Technical Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Frontend -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Frontend Development</h3>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Vue.js</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">React</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Tailwind CSS</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">TypeScript</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">JavaScript</span>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Backend Development</h3>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Laravel</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Node.js</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">PHP</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Python</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">REST APIs</span>
            </div>
          </div>

          <!-- Database -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Database & DevOps</h3>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">MySQL</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">PostgreSQL</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">MongoDB</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Redis</span>
              <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Docker</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-devna-dark mb-8 text-center">Project Timeline</h2>
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="space-y-8">
            <!-- Timeline Item -->
            <div v-for="(item, index) in timeline" :key="index" class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-devna-primary to-devna-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div v-if="index < timeline.length - 1" class="w-0.5 h-full bg-gradient-to-b from-devna-primary to-devna-accent mt-2"></div>
              </div>
              <div class="flex-1 pb-8">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-devna-dark">{{ item.title }}</h3>
                  <span class="text-sm text-gray-500">{{ item.date }}</span>
                </div>
                <p class="text-gray-600 mb-3">{{ item.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in item.technologies" 
                    :key="tech"
                    class="text-xs px-3 py-1 bg-devna-primary/10 text-devna-primary rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div class="text-4xl font-bold text-devna-primary mb-2">5+</div>
          <div class="text-sm text-gray-600">Years Experience</div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div class="text-4xl font-bold text-devna-primary mb-2">30+</div>
          <div class="text-sm text-gray-600">Projects Completed</div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div class="text-4xl font-bold text-devna-primary mb-2">50+</div>
          <div class="text-sm text-gray-600">Happy Clients</div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div class="text-4xl font-bold text-devna-primary mb-2">15+</div>
          <div class="text-sm text-gray-600">Active Products</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-gradient-to-br from-devna-dark to-slate-900 rounded-2xl p-12 text-center shadow-2xl">
        <h2 class="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together.
        </p>
        <router-link 
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-white text-devna-dark rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Get In Touch
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const timeline = ref([
  {
    title: 'E-Commerce Platform Launch',
    date: '2024',
    description: 'Developed and launched a complete e-commerce solution with advanced inventory management and analytics.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe']
  },
  {
    title: 'SaaS Dashboard Framework',
    date: '2023',
    description: 'Created a reusable SaaS dashboard framework used by multiple businesses for data visualization.',
    technologies: ['Vue.js', 'Chart.js', 'Tailwind CSS']
  },
  {
    title: 'CRM System Development',
    date: '2022',
    description: 'Built a comprehensive CRM system with lead tracking, pipeline management, and email automation.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Project Management Tool',
    date: '2021',
    description: 'Designed and developed a team collaboration platform with real-time updates and task management.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io']
  }
])
</script>
