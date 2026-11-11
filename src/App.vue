<template>
  <div class="min-h-screen app-shell relative overflow-x-clip transition-colors duration-300 bg-transparent">
    <!-- Cyber DNA animated background matching banner-devnapp.jpg — z-index 0, fixed inset-0 -->
    <CyberDnaBackground />

    <!-- Ambient Backlight Orbs (pierce through frosted glass, positioned behind content at z-0) -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <!-- Orb 1: Top Right Vibrant Cyan Orb (#00A8FF) -->
      <div
        class="absolute -top-24 right-[-10%] w-[680px] h-[680px] rounded-full"
        style="background: radial-gradient(circle, #00A8FF 0%, rgba(0, 168, 255, 0) 70%); filter: blur(120px); opacity: 0.35;"
      ></div>

      <!-- Orb 2: Upper Mid-Left Indigo Light (#3B82F6) behind stats & projects -->
      <div
        class="absolute top-[22%] -left-36 w-[750px] h-[750px] rounded-full"
        style="background: radial-gradient(circle, #3B82F6 0%, rgba(59, 130, 246, 0) 70%); filter: blur(120px); opacity: 0.32;"
      ></div>

      <!-- Orb 3: Mid-Page Vibrant Cyan/Violet behind steps & bento grid -->
      <div
        class="absolute top-[48%] right-[-12%] w-[800px] h-[800px] rounded-full"
        style="background: radial-gradient(circle, #00A8FF 0%, #1E1B4B 50%, rgba(0, 168, 255, 0) 75%); filter: blur(130px); opacity: 0.30;"
      ></div>

      <!-- Orb 4: Lower-Left Royal Blue behind testimonials & contact -->
      <div
        class="absolute top-[72%] -left-40 w-[720px] h-[720px] rounded-full"
        style="background: radial-gradient(circle, #3B82F6 0%, #1E1B4B 60%, rgba(59, 130, 246, 0) 75%); filter: blur(120px); opacity: 0.30;"
      ></div>

      <!-- Orb 5: Bottom Cyan Accent -->
      <div
        class="absolute -bottom-36 left-1/3 w-[650px] h-[650px] rounded-full"
        style="background: radial-gradient(circle, #00A8FF 0%, rgba(0, 168, 255, 0) 70%); filter: blur(120px); opacity: 0.32;"
      ></div>
    </div>

    <!-- Main Content Container with floating island navbar and pages -->
    <div class="relative z-10 flex flex-col min-h-screen bg-transparent">
      <Navbar />
      <main class="grow bg-transparent">
        <RouterView />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import StickyCTA from './components/StickyCTA.vue'
import CyberDnaBackground from '@/components/CyberDnaBackground.vue'

// Linear / Apple Spotlight cursor tracking on all .vision-glass-card and .ios-glass elements
let pointerHandler: ((e: PointerEvent) => void) | null = null

onMounted(() => {
  pointerHandler = (e: PointerEvent) => {
    const target = (e.target as HTMLElement | null)?.closest(
      '.vision-glass-card, .ios-glass, .ios-glass-card, .ios-glass-static'
    ) as HTMLElement | null
    if (target) {
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      target.style.setProperty('--mouse-x', `${x}px`)
      target.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  window.addEventListener('pointermove', pointerHandler, { passive: true })
})

onUnmounted(() => {
  if (pointerHandler) {
    window.removeEventListener('pointermove', pointerHandler)
    pointerHandler = null
  }
})
</script>
