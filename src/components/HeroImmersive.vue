<template>
  <section class="hero-immersive relative overflow-hidden bg-[#010217]">
    <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 schematic-grid opacity-60"></div>
      <div class="absolute inset-0 schematic-noise opacity-35"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(0,194,255,0.12),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,23,0.1)_0%,transparent_40%)]"></div>
    </div>

    <div class="relative z-10 page-container pt-16 sm:pt-[4.25rem] pb-6 sm:pb-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
        <!-- Copy -->
        <div class="lg:col-span-6 xl:col-span-5 flex flex-col justify-center py-3 lg:py-4">
          <p ref="badgeRef" class="eyebrow-sys mb-3 opacity-0 translate-y-4">
            {{ t.home.badge }}
          </p>

          <h1 ref="titleRef" class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-extrabold tracking-tight text-white leading-[1.05] mb-4">
            <span class="block overflow-hidden">
              <span class="block relative">{{ t.home.titleLine1 }}</span>
            </span>
            <span class="block overflow-hidden mt-1">
              <span class="block relative text-gradient">{{ t.home.titleLine2 }}</span>
            </span>
          </h1>

          <p ref="descRef" class="text-base sm:text-lg text-[#9aa8bc] mb-6 max-w-xl leading-relaxed font-light opacity-0 translate-y-4">
            {{ t.home.description }}
          </p>

          <div ref="ctaRef" class="flex flex-col sm:flex-row gap-3 opacity-0 translate-y-4">
            <router-link to="/contact" class="btn-sys btn-sys-primary">
              {{ t.common.discussSystem }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
            <router-link to="/projects" class="btn-sys btn-sys-ghost">
              {{ t.common.viewCaseStudies }}
            </router-link>
          </div>
        </div>

        <!-- Auto-scrolling product gallery -->
        <div ref="panelRef" class="lg:col-span-6 xl:col-span-7 opacity-0 translate-y-4">
          <div class="hero-gallery relative h-[300px] sm:h-[360px] lg:h-[420px] border border-[#1a2740] bg-[#070b1c] overflow-hidden">
            <!-- Glow frame -->
            <div class="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_0_1px_rgba(0,194,255,0.12)]"></div>
            <div class="pointer-events-none absolute -inset-px z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15),transparent_65%)] opacity-70"></div>

            <!-- Fade masks -->
            <div class="pointer-events-none absolute inset-x-0 top-0 h-14 z-30 bg-linear-to-b from-[#070b1c] to-transparent"></div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-14 z-30 bg-linear-to-t from-[#070b1c] to-transparent"></div>

            <div class="absolute inset-0 z-10 flex gap-3 p-3 sm:p-4">
              <!-- Column A — scroll up -->
              <div class="flex-1 overflow-hidden">
                <div class="hero-marquee-up flex flex-col gap-3 will-change-transform">
                  <div
                    v-for="(img, i) in scrollImagesA"
                    :key="`a-${i}`"
                    class="hero-shot relative shrink-0 overflow-hidden border border-[#1a2740]/80"
                  >
                    <img :src="img" alt="" class="w-full h-40 sm:h-48 object-cover object-top" loading="lazy" />
                    <div class="absolute inset-0 bg-linear-to-t from-[#010217]/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <!-- Column B — scroll down -->
              <div class="hidden sm:block flex-1 overflow-hidden">
                <div class="hero-marquee-down flex flex-col gap-3 will-change-transform">
                  <div
                    v-for="(img, i) in scrollImagesB"
                    :key="`b-${i}`"
                    class="hero-shot relative shrink-0 overflow-hidden border border-[#1a2740]/80"
                  >
                    <img :src="img" alt="" class="w-full h-40 sm:h-48 object-cover object-top" loading="lazy" />
                    <div class="absolute inset-0 bg-linear-to-t from-[#010217]/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="absolute bottom-3 left-3 z-40 flex items-center gap-2 px-2.5 py-1.5 bg-[#010217]/80 border border-[#1a2740] backdrop-blur-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00c2ff] animate-pulse-glow"></span>
              <span class="font-mono-sys text-[10px] uppercase tracking-[0.14em] text-[#c8d0dc]">{{ t.common.livePreview }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
import { useI18n } from '@/i18n'

import tm1 from '@/assets/tickMizane/TeckMizanne1.png'
import tm2 from '@/assets/tickMizane/TeckMizanne2.png'
import tm3 from '@/assets/tickMizane/TeckMizanne3.png'
import tm4 from '@/assets/tickMizane/TeckMizanne4.png'
import af1 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145154.png'
import af2 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145214.png'
import af3 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145330.png'
import af4 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145343.png'
import af5 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145352.png'

const { t } = useI18n()

const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)

const baseA = [tm1, af1, tm2, af3, tm3]
const baseB = [af2, tm4, af4, tm1, af5]

const scrollImagesA = [...baseA, ...baseA]
const scrollImagesB = [...baseB, ...baseB]

onMounted(() => {
  if (badgeRef.value) {
    animate(badgeRef.value, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 650,
      delay: 120,
      easing: 'easeOutExpo',
    })
  }

  const titleLines = titleRef.value?.querySelectorAll('span.block.relative')
  if (titleLines?.length) {
    animate(titleLines, {
      translateY: ['108%', '0%'],
      opacity: [0, 1],
      duration: 850,
      delay: stagger(80, { start: 220 }),
      easing: 'easeOutExpo',
    })
  }

  const rest = [descRef.value, ctaRef.value, panelRef.value].filter(Boolean)
  if (rest.length) {
    animate(rest, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 700,
      delay: stagger(80, { start: 550 }),
      easing: 'easeOutExpo',
    })
  }
})
</script>

<style scoped>
.hero-shot {
  box-shadow: 0 12px 28px rgba(1, 2, 23, 0.45);
}

.hero-marquee-up {
  animation: hero-scroll-up 32s linear infinite;
}

.hero-marquee-down {
  animation: hero-scroll-down 36s linear infinite;
}

.hero-gallery:hover .hero-marquee-up,
.hero-gallery:hover .hero-marquee-down {
  animation-play-state: paused;
}

@keyframes hero-scroll-up {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}

@keyframes hero-scroll-down {
  from { transform: translateY(-50%); }
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-marquee-up,
  .hero-marquee-down {
    animation: none;
  }
}
</style>
