<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-devna-dark via-slate-900 to-devna-dark">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-devna-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-devna-accent/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div class="space-y-8 animate-fade-in">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Development New Application</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Smart Web Apps For
            <span class="block text-gradient bg-gradient-to-r from-devna-accent to-blue-400 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h1>

          <!-- Description -->
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong>DevNA</strong> (Development New Application) specializes in building brand new software applications 
            using the latest technologies and IT development methodologies. We deliver production-ready web solutions 
            that help businesses scale faster with modern, secure, and fully customizable applications.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button class="px-8 py-4 bg-devna-primary hover:bg-devna-primary/90 text-white rounded-full font-semibold shadow-2xl shadow-devna-primary/50 hover:shadow-devna-primary/70 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Explore Projects</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
            <button class="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-semibold border border-white/20 transition-all duration-300 flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div class="text-center">
              <div class="text-4xl font-bold text-white mb-2">15+</div>
              <div class="text-sm text-gray-400">Projects Built</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-white mb-2">50+</div>
              <div class="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-white mb-2">99%</div>
              <div class="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-24 bg-devna-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-devna-dark mb-4">
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of ready-to-deploy web applications built with modern technologies
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12">
          <router-link 
            to="/projects"
            class="inline-flex items-center px-8 py-4 bg-devna-dark hover:bg-devna-dark/90 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-devna-dark mb-4">
            Why Choose <span class="text-gradient">DevNA</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality and innovation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Lightning Fast</h3>
            <p class="text-gray-600">Optimized for performance with modern frameworks and best practices ensuring fast load times.</p>
          </div>

          <!-- Feature 2 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Secure & Reliable</h3>
            <p class="text-gray-600">Built with security in mind, following industry standards and best practices for data protection.</p>
          </div>

          <!-- Feature 3 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Fully Customizable</h3>
            <p class="text-gray-600">Easily adapt and customize our applications to match your brand and specific requirements.</p>
          </div>

          <!-- Feature 4 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Modern Tech Stack</h3>
            <p class="text-gray-600">Built with Vue.js, Laravel, Tailwind CSS, and other cutting-edge technologies.</p>
          </div>

          <!-- Feature 5 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">24/7 Support</h3>
            <p class="text-gray-600">Get dedicated support whenever you need it. We're here to help you succeed.</p>
          </div>

          <!-- Feature 6 -->
          <div class="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-devna-accent/50">
            <div class="w-14 h-14 bg-gradient-to-br from-devna-primary to-devna-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-devna-dark mb-3">Easy Deployment</h3>
            <p class="text-gray-600">Quick setup and deployment process with comprehensive documentation included.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-devna-dark via-slate-900 to-devna-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-devna-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-devna-accent rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Let's discuss your project and find the perfect solution for your business needs
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link 
            to="/contact"
            class="px-8 py-4 bg-white text-devna-dark rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us Today
          </router-link>
          <a 
            href="https://wa.me/212XXXXXXXXX"
            target="_blank"
            class="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const featuredProjects = ref([
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
  }
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
