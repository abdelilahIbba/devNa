<template>
  <section class="hero-immersive relative overflow-hidden bg-[#010217] pt-20 sm:pt-24 pb-10">
    <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 schematic-grid opacity-50"></div>
      <div class="absolute inset-0 schematic-noise opacity-30"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(0,168,255,0.12),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,23,0.2)_0%,transparent_50%)]"></div>
    </div>

    <div class="relative z-10 page-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        <!-- Copy Column -->
        <div class="lg:col-span-6 xl:col-span-5 flex flex-col justify-center py-2 lg:py-4">
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
            <router-link to="/contact" class="btn-sys btn-sys-primary shadow-[0_0_24px_rgba(0,168,255,0.3)]">
              {{ t.common.discussSystem }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
            <router-link to="/projects" class="btn-sys btn-sys-ghost hover:border-[#00c2ff]/40">
              {{ t.common.viewCaseStudies }}
            </router-link>
          </div>
        </div>

        <!-- System Previews Column with 3D DNA Frame & Interactive Tabs -->
        <div ref="panelRef" class="lg:col-span-6 xl:col-span-7 opacity-0 translate-y-4 relative">
          <!-- Interactive System Switcher Tabs -->
          <div class="flex items-center justify-between gap-2 mb-3 px-1 z-30 relative flex-wrap">
            <div class="inline-flex p-1 rounded-full bg-[#070b1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
              <button
                v-for="tab in systemTabs"
                :key="tab.id"
                type="button"
                @click="activeTab = tab.id"
                class="px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                :class="activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217] font-semibold shadow-[0_0_16px_rgba(0,194,255,0.35)]'
                  : 'text-[#9aa8bc] hover:text-white hover:bg-white/5'"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Active system status pill -->
            <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono-sys text-[#c8d0dc]">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{{ activeSystemTag }}</span>
            </div>
          </div>

          <!-- DNA Frame & Glass Preview Container -->
          <div class="relative group/dna">
            <DnaBorderCanvas />

            <div class="hero-gallery ios-glass-static relative h-[320px] sm:h-[380px] lg:h-[440px] overflow-hidden">
              <!-- Subtle inner ambient glow -->
              <div class="pointer-events-none absolute -inset-px z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,168,255,0.12),transparent_65%)]"></div>

              <!-- VIEW 1: Dual Auto-Scrolling Stream -->
              <div v-if="activeTab === 'all'" class="absolute inset-0 z-10 flex gap-3 p-3 sm:p-4">
                <!-- Fade masks -->
                <div class="pointer-events-none absolute inset-x-0 top-0 h-14 z-30 bg-gradient-to-b from-[#070b1c]/90 to-transparent"></div>
                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-14 z-30 bg-gradient-to-t from-[#070b1c]/90 to-transparent"></div>

                <!-- Column A — scroll up -->
                <div class="flex-1 overflow-hidden">
                  <div class="hero-marquee-up flex flex-col gap-3 will-change-transform">
                    <div
                      v-for="(img, i) in scrollImagesA"
                      :key="`a-${i}`"
                      class="hero-shot relative shrink-0 overflow-hidden border border-white/10 rounded-xl"
                    >
                      <img :src="img" alt="DEVNAPP system screen" class="w-full h-40 sm:h-48 object-cover object-top" loading="lazy" />
                      <div class="absolute inset-0 bg-gradient-to-t from-[#010217]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                <!-- Column B — scroll down -->
                <div class="hidden sm:block flex-1 overflow-hidden">
                  <div class="hero-marquee-down flex flex-col gap-3 will-change-transform">
                    <div
                      v-for="(img, i) in scrollImagesB"
                      :key="`b-${i}`"
                      class="hero-shot relative shrink-0 overflow-hidden border border-white/10 rounded-xl"
                    >
                      <img :src="img" alt="DEVNAPP system screen" class="w-full h-40 sm:h-48 object-cover object-top" loading="lazy" />
                      <div class="absolute inset-0 bg-gradient-to-t from-[#010217]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- VIEW 2: TeckMizanne POS Focus Showcase -->
              <div v-else-if="activeTab === 'pos'" class="absolute inset-0 z-10 flex flex-col p-4 sm:p-5">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <h3 class="text-white font-bold text-base sm:text-lg">TeckMizanne POS</h3>
                    <p class="text-xs text-[#00c2ff] font-mono-sys">{{ posScreens[posIndex].label }}</p>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button
                      type="button"
                      @click="prevPos"
                      class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Previous screen"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      @click="nextPos"
                      class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Next screen"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div class="grow relative rounded-xl overflow-hidden border border-white/10 bg-[#010217]/60">
                  <img
                    :src="posScreens[posIndex].src"
                    :alt="posScreens[posIndex].label"
                    class="w-full h-full object-cover object-top transition-opacity duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#010217]/70 via-transparent to-transparent"></div>
                </div>

                <!-- Pagination dots -->
                <div class="flex justify-center gap-1.5 mt-3">
                  <button
                    v-for="(_, idx) in posScreens"
                    :key="`pos-dot-${idx}`"
                    type="button"
                    @click="posIndex = idx"
                    class="h-1.5 rounded-full transition-all duration-300"
                    :class="posIndex === idx ? 'w-6 bg-[#00c2ff]' : 'w-1.5 bg-white/30'"
                  ></button>
                </div>
              </div>

              <!-- VIEW 3: AutoFleet Manager Focus Showcase -->
              <div v-else-if="activeTab === 'fleet'" class="absolute inset-0 z-10 flex flex-col p-4 sm:p-5">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <h3 class="text-white font-bold text-base sm:text-lg">AutoFleet Manager</h3>
                    <p class="text-xs text-[#00c2ff] font-mono-sys">{{ fleetScreens[fleetIndex].label }}</p>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button
                      type="button"
                      @click="prevFleet"
                      class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Previous screen"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      @click="nextFleet"
                      class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Next screen"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div class="grow relative rounded-xl overflow-hidden border border-white/10 bg-[#010217]/60">
                  <img
                    :src="fleetScreens[fleetIndex].src"
                    :alt="fleetScreens[fleetIndex].label"
                    class="w-full h-full object-cover object-top transition-opacity duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#010217]/70 via-transparent to-transparent"></div>
                </div>

                <!-- Pagination dots -->
                <div class="flex justify-center gap-1.5 mt-3">
                  <button
                    v-for="(_, idx) in fleetScreens"
                    :key="`fleet-dot-${idx}`"
                    type="button"
                    @click="fleetIndex = idx"
                    class="h-1.5 rounded-full transition-all duration-300"
                    :class="fleetIndex === idx ? 'w-6 bg-[#00c2ff]' : 'w-1.5 bg-white/30'"
                  ></button>
                </div>
              </div>

              <!-- Bottom badge -->
              <div class="absolute bottom-3 left-3 z-40 flex items-center gap-2 px-3 py-1.5 bg-[#010217]/85 border border-white/10 backdrop-blur-md rounded-full shadow-lg">
                <span class="w-2 h-2 rounded-full bg-[#00c2ff] animate-pulse"></span>
                <span class="font-mono-sys text-[10px] uppercase tracking-[0.14em] text-[#c8d0dc]">{{ t.common.livePreview }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
import { useI18n } from '@/i18n'
import DnaBorderCanvas from '@/components/DnaBorderCanvas.vue'

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

const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)

// Interactive Tabs State
const activeTab = ref<'all' | 'pos' | 'fleet'>('all')

const systemTabs = computed(() => [
  { id: 'all' as const, label: locale.value === 'fr' ? 'Flux global' : locale.value === 'ar' ? 'البث العام' : 'Live Stream' },
  { id: 'pos' as const, label: 'TeckMizanne POS' },
  { id: 'fleet' as const, label: 'AutoFleet Manager' },
])

const activeSystemTag = computed(() => {
  if (activeTab.value === 'pos') return 'Retail · Multi-Magasin'
  if (activeTab.value === 'fleet') return 'Transport · Flotte Connectée'
  return 'Production · Multi-Secteurs'
})

// Specific Screen Showcases
const posIndex = ref(0)
const posScreens = computed(() => [
  { src: tm1, label: locale.value === 'fr' ? 'Terminal Caisse & Ventes' : locale.value === 'ar' ? 'نقطة البيع والصندوق' : 'POS Checkout Terminal' },
  { src: tm2, label: locale.value === 'fr' ? 'Gestion des Stocks & Alertes' : locale.value === 'ar' ? 'إدارة المخزون والتنبيهات' : 'Multi-Store Stock Sync' },
  { src: tm3, label: locale.value === 'fr' ? 'Catalogue Produits & Prix' : locale.value === 'ar' ? 'كتالوج المنتجات والأسعار' : 'Product & Pricing Matrix' },
  { src: tm4, label: locale.value === 'fr' ? 'Rapports Financiers & KPI' : locale.value === 'ar' ? 'التقارير المالية والمؤشرات' : 'Analytics & Daily Balance' },
])

const prevPos = () => {
  posIndex.value = (posIndex.value - 1 + posScreens.value.length) % posScreens.value.length
}
const nextPos = () => {
  posIndex.value = (posIndex.value + 1) % posScreens.value.length
}

const fleetIndex = ref(0)
const fleetScreens = computed(() => [
  { src: af1, label: locale.value === 'fr' ? 'Réservation & Disponibilité' : locale.value === 'ar' ? 'الحجز والتوافر المباشر' : 'Live Vehicle Booking' },
  { src: af2, label: locale.value === 'fr' ? 'Catalogue Véhicules & Tarifs' : locale.value === 'ar' ? 'كتالوج المركبات والأسعار' : 'Fleet Fleet & Specs' },
  { src: af3, label: locale.value === 'fr' ? 'Contrats Numériques' : locale.value === 'ar' ? 'العقود الرقمية والعملاء' : 'Digital Contracts & Signatures' },
  { src: af4, label: locale.value === 'fr' ? 'Tableau de Bord Opérations' : locale.value === 'ar' ? 'لوحة تحكم العمليات' : 'Operations Dashboard' },
  { src: af5, label: locale.value === 'fr' ? 'Suivi & Maintenance' : locale.value === 'ar' ? 'المتابعة والصيانة' : 'Maintenance & Telemetry' },
])

const prevFleet = () => {
  fleetIndex.value = (fleetIndex.value - 1 + fleetScreens.value.length) % fleetScreens.value.length
}
const nextFleet = () => {
  fleetIndex.value = (fleetIndex.value + 1) % fleetScreens.value.length
}

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
