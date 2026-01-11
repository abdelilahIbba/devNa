<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8">
    <!-- 1. Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Animated Grid -->
      <div class="absolute inset-0 opacity-10" ref="gridRef">
        <svg class="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" class="stroke-slate-500" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div ref="orb1" class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div ref="orb2" class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
    </div>

    <!-- 2. Main Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- Left: Copy -->
      <div class="text-center lg:text-left">
        <div ref="badgeRef" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-blue-400 font-medium mb-8 opacity-0 translate-y-4 backdrop-blur-md">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Proven Business Solutions
        </div>

        <h1 ref="titleRef" class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          <span class="block overflow-hidden relative">
            <span class="block relative">Reliable Digital</span>
          </span>
          <span class="block overflow-hidden relative">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 relative">Solutions for Growth</span>
          </span>
        </h1>

        <p ref="descRef" class="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light opacity-0 translate-y-4">
          DevNA helps businesses scale and operate better with custom management systems. We bridge the gap between your operational challenges and streamlined digital efficiency.
        </p>

        <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 translate-y-4">
          <router-link to="/contact" class="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40 inline-flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            <span class="relative flex items-center gap-2">
              Discuss Your Project
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </router-link>
          
          <router-link to="/projects" class="group px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-all hover:bg-slate-800 inline-flex items-center justify-center">
            Explore Case Studies
          </router-link>
        </div>
      </div>

      <!-- Right: Interactive Visual (Dashboard Simulator) -->
      <div class="relative hidden lg:block perspective-1000" ref="visualRef">
        <!-- Floating Card -->
        <div class="relative bg-slate-900 rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out-expo h-[400px] w-full max-w-md mx-auto">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 bg-slate-800/80 border-b border-slate-700">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-xs font-semibold text-slate-300 tracking-wider">SYSTEM STATUS: ONLINE</span>
            </div>
            <div class="text-xs text-slate-500 font-mono">v4.2.0</div>
          </div>
          
          <!-- Dashboard Content -->
          <div class="p-6 space-y-6">
            <!-- Simulated Metric 1 -->
            <div class="space-y-2">
               <div class="flex justify-between text-sm text-slate-400">
                  <span>Daily Transactions</span>
                  <span class="text-green-400 font-mono">+24%</span>
               </div>
               <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 w-[75%] rounded-full animate-pulse"></div>
               </div>
            </div>

            <!-- Simulated Metric 2 -->
            <div class="space-y-2">
               <div class="flex justify-between text-sm text-slate-400">
                  <span>Inventory Sync</span>
                  <span class="text-blue-400 font-mono">Processing...</span>
               </div>
               <div class="flex gap-1">
                  <div class="h-10 w-1 bg-blue-500/20 rounded-full animate-[height_1s_ease-in-out_infinite]"></div>
                  <div class="h-10 w-1 bg-blue-500/40 rounded-full animate-[height_1s_ease-in-out_infinite_100ms]"></div>
                  <div class="h-10 w-1 bg-blue-500/60 rounded-full animate-[height_1s_ease-in-out_infinite_200ms]"></div>
                  <div class="h-10 w-1 bg-blue-500/80 rounded-full animate-[height_1s_ease-in-out_infinite_300ms]"></div>
                  <div class="h-10 w-1 bg-blue-500/60 rounded-full animate-[height_1s_ease-in-out_infinite_400ms]"></div>
                  <div class="h-10 w-1 bg-blue-500/40 rounded-full animate-[height_1s_ease-in-out_infinite_500ms]"></div>
                  <div class="h-10 w-1 bg-blue-500/20 rounded-full animate-[height_1s_ease-in-out_infinite_600ms]"></div>
               </div>
            </div>

            <!-- Activity Log -->
            <div class="mt-8 pt-6 border-t border-slate-800/50">
               <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Activity</p>
               <div class="space-y-3 font-mono text-xs text-slate-400" id="activity-log">
                  <!-- JS inserts here -->
               </div>
            </div>
          </div>

          <!-- Glass overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        </div>

        <!-- Decorative Elements behind -->
        <div class="absolute -z-10 top-[-20px] right-[-20px] w-full max-w-md mx-auto h-full border border-slate-700/30 rounded-xl bg-slate-800/20 backdrop-blur-sm"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate, stagger, Timeline } from 'animejs'

const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)
const orb1 = ref<HTMLElement | null>(null)
const orb2 = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)

// Animation Sequence
onMounted(() => {
  // 1. Entrance Animation
  const timeline = new Timeline({
    easing: 'easeOutExpo'
  })

  // Grid fade in
  timeline.add(gridRef.value, {
    opacity: [0, 0.1],
    duration: 2000
  })

  // Badge reveal
  .add(badgeRef.value, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
  }, '-=1500')

  // Title reveal word by word (if split) or block
  .add(titleRef.value?.querySelectorAll('span.block.relative'), {
    translateY: ['110%', '0%'],
    opacity: [0, 1],
    duration: 1000,
    delay: stagger(100),
  }, '-=600')

  // Description & CTA
  .add([descRef.value, ctaRef.value], {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: stagger(100)
  }, '-=800')

  // Visual card float in
  .add(visualRef.value, {
    opacity: [0, 1],
    translateX: [50, 0],
    rotateY: [-15, -5],
    rotateX: [10, 5],
    duration: 1200,
  }, '-=1000')

  // Start log simulator
  simulateActivityLog()
})

const simulateActivityLog = () => {
   const logs = [
      'New order received #8821',
      'Stock updated: Warehouse A',
      'Payment verified',
      'Customer database synced',
      'Generating daily report...',
      'Optimization complete'
   ]
   const container = document.getElementById('activity-log')
   if(!container) return

   let i = 0
   const addLog = () => {
      const p = document.createElement('div')
      p.className = 'flex items-center gap-2 opacity-0 transform translate-x-2 transition-all duration-300'
      p.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> ${logs[i % logs.length]}`
      container.prepend(p)
      
      // Animate entry
      requestAnimationFrame(() => {
         p.classList.remove('opacity-0', 'translate-x-2')
      })

      // Remove old
      if(container.children.length > 4) {
         container.lastElementChild?.remove()
      }

      i++
      setTimeout(addLog, 2000)
   }
   addLog()
}
</script>
