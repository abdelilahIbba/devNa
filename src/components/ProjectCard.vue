<template>
  <div 
    class="relative group/card h-full"
    @click="handleClick"
    @mouseenter="playHoverAnim"
    @mouseleave="resetHoverAnim"
  >
    <!-- Subtle ambient glow behind card on hover -->
    <div
      class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00A8FF]/20 via-[#0044FF]/15 to-[#00A8FF]/20 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
    ></div>

    <div class="vision-glass-card relative overflow-hidden rounded-2xl cursor-pointer h-full flex flex-col">
      <!-- Software Window Mockup Frame Header (macOS / SaaS Style) -->
      <div class="vision-glass-inner px-4 py-2.5 border-b border-white/10 flex items-center justify-between z-20 relative backdrop-blur-md">
        <!-- Window Traffic Light Dots -->
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.6)]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.6)]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.6)]"></span>
        </div>

        <!-- System Address Bar / URI -->
        <div class="flex items-center gap-1.5 px-3 py-0.5 rounded-full vision-glass-inner border border-white/10 text-[10px] sm:text-[11px] text-[#9aa8bc] font-mono-sys max-w-[210px] truncate">
          <svg class="w-3 h-3 text-[#00c2ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span class="truncate">devnapp://{{ project.title.toLowerCase().replace(/[^a-z0-9]/g, '-') }}</span>
        </div>

        <!-- Live Status Pill -->
        <div class="flex items-center gap-1.5 text-[10px] font-mono-sys text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="hidden sm:inline">Module</span> Live
        </div>
      </div>

      <!-- Viewport / Software Display Area -->
      <div class="relative h-64 overflow-hidden bg-transparent" @click.stop="openModal">
        <!-- Underlying Preview Image -->
        <img 
          :src="displayImage" 
          :alt="project.title"
          class="w-full h-full object-cover transform origin-center transition-transform duration-700 will-change-transform"
          :class="[project.id > 2 ? 'opacity-30 blur-[2px] scale-105' : '']"
          ref="imageRef"
        />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>

        <!-- Specialized Software UI Mockup Overlays for Custom Systems (IDs 3, 4, 5, 6) -->
        <div v-if="project.id === 3" class="absolute inset-3 z-10 flex flex-col justify-between p-3.5 rounded-xl vision-glass-inner border border-white/20 backdrop-blur-md">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono-sys text-[#00c2ff] uppercase tracking-wider">WMS Intelligence • Quai 04</span>
            <span class="text-[10px] font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">+24% Flux</span>
          </div>
          <div>
            <div class="text-xs text-[#9aa8bc] font-mono-sys mb-1">Cadence de traitement</div>
            <div class="text-xl font-bold font-mono text-white tracking-tight">1 840 <span class="text-xs text-[#00c2ff]">colis / heure</span></div>
            <div class="mt-2 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-[#0096e0] to-[#00c2ff] h-full w-[88%]"></div>
            </div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-[#9aa8bc] font-mono-sys pt-1 border-t border-white/10">
            <span>Scan RFID / Code-Barres</span>
            <span class="text-[#00c2ff]">Synchronisé</span>
          </div>
        </div>

        <div v-else-if="project.id === 4" class="absolute inset-3 z-10 flex flex-col justify-between p-3.5 rounded-xl vision-glass-inner border border-white/20 backdrop-blur-md">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono-sys text-[#00c2ff] uppercase tracking-wider">SantéConnect CRM • Clinique</span>
            <span class="text-[10px] font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">RGPD & HDS</span>
          </div>
          <div>
            <div class="text-xs text-[#9aa8bc] font-mono-sys mb-1">File active & Rendez-vous</div>
            <div class="text-xl font-bold font-mono text-white tracking-tight">42 <span class="text-xs text-emerald-300">Patients planifiés</span></div>
            <div class="text-[11px] text-[#9aa8bc] mt-1">Délai d'attente moyen : <strong class="text-white">6 min</strong></div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-[#9aa8bc] font-mono-sys pt-1 border-t border-white/10">
            <span>Dossier médical chiffré</span>
            <span class="text-emerald-400">AES-256 Actif</span>
          </div>
        </div>

        <div v-else-if="project.id === 5" class="absolute inset-3 z-10 flex flex-col justify-between p-3.5 rounded-xl vision-glass-inner border border-white/20 backdrop-blur-md">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono-sys text-[#00c2ff] uppercase tracking-wider">CityReal Engine • B2B</span>
            <span class="text-[10px] font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">96.8% Rempli</span>
          </div>
          <div>
            <div class="text-xs text-[#9aa8bc] font-mono-sys mb-1">Baux & Candidatures traitées</div>
            <div class="text-xl font-bold font-mono text-white tracking-tight">184 <span class="text-xs text-[#00c2ff]">Dossiers validés</span></div>
            <div class="text-[11px] text-[#9aa8bc] mt-1">Visite 3D interactive : <strong class="text-white">Disponible</strong></div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-[#9aa8bc] font-mono-sys pt-1 border-t border-white/10">
            <span>Signature électronique</span>
            <span class="text-emerald-400">Certifiée</span>
          </div>
        </div>

        <div v-else-if="project.id === 6" class="absolute inset-3 z-10 flex flex-col justify-between p-3.5 rounded-xl vision-glass-inner border border-white/20 backdrop-blur-md">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono-sys text-[#00c2ff] uppercase tracking-wider">TraceFlow IoT • Chaîne du Froid</span>
            <span class="text-[10px] font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">Conforme +3.2°C</span>
          </div>
          <div>
            <div class="text-xs text-[#9aa8bc] font-mono-sys mb-1">Traçabilité de la ferme au rayon</div>
            <div class="text-xl font-bold font-mono text-white tracking-tight">100% <span class="text-xs text-[#00c2ff]">Lots certifiés</span></div>
            <div class="text-[11px] text-[#9aa8bc] mt-1">Capteurs connectés : <strong class="text-emerald-300">LoRaWAN Online</strong></div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-[#9aa8bc] font-mono-sys pt-1 border-t border-white/10">
            <span>Contrôle qualité</span>
            <span class="text-emerald-400">100% Validé</span>
          </div>
        </div>
        
        <!-- Category Badge (Top Left, only for screenshot projects 1 & 2) -->
        <div v-if="project.id <= 2" class="absolute top-4 left-4 z-10">
          <span class="px-3.5 py-1 text-xs font-semibold tracking-wide uppercase text-[#010217] bg-[#00c2ff] rounded-full shadow-lg">
            {{ project.category }}
          </span>
        </div>

        <!-- Image Navigation Dots (for multi-image projects) -->
        <div 
          v-if="project.images && project.images.length > 1"
          class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10"
          @click.stop
        >
          <button 
            v-for="(_, index) in project.images" 
            :key="index"
            @click.prevent="setImage(index)"
            class="h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm"
            :class="activeImageIndex === index ? 'bg-[#00c2ff] w-6' : 'bg-white/50 hover:bg-white w-1.5'"
          ></button>
        </div>

        <!-- Expand Icon (Top Right) -->
        <div class="absolute top-4 right-4 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <button 
            class="p-2.5 bg-black/60 hover:bg-[#00c2ff] hover:text-[#010217] backdrop-blur-md rounded-full text-white transition-all shadow-lg"
            title="View Fullscreen"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Image Modal -->
      <Teleport to="body">
        <ImageModal 
          v-if="showModal"
          :images="project.images || [project.image]"
          :initial-index="activeImageIndex"
          :project-url="project.previewUrl"
          :project-title="project.title"
          :project-description="project.description"
          :project-category="project.category"
          :project-technologies="project.technologies"
          :project-preview-brand="project.previewBrand"
          :project-preview-headline="project.previewHeadline"
          :project-preview-summary="project.previewSummary"
          :project-preview-stats="project.previewStats"
          @close="showModal = false"
        />
      </Teleport>

      <!-- Content Section -->
      <div class="p-7 sm:p-8 flex flex-col grow relative">
        <!-- Title -->
        <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover/card:text-[#00c2ff] transition-colors duration-300">
          {{ project.title }}
        </h3>
        
        <!-- Problem/Solution (Description) -->
        <div class="relative overflow-hidden mb-6 grow">
          <p class="text-[#9aa8bc] leading-relaxed text-sm">
             {{ project.description }}
          </p>
          <p v-if="project.result" class="mt-3 text-xs font-semibold text-emerald-300/90 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{{ t.projects.result }}: {{ project.result }}</span>
          </p>
        </div>

        <!-- Business Impact / Features -->
        <div class="pt-5 border-t border-white/10 mt-auto">
          <p class="text-[11px] font-bold text-[#9aa8bc] uppercase tracking-wider mb-2.5 font-mono-sys">
            {{ t.projects.keyImpact }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="benefit in project.technologies?.slice(0, 3)" 
              :key="benefit"
              class="px-2.5 py-1 text-xs font-medium text-[#7ddcf8] vision-glass-inner border border-white/20 rounded-lg group-hover/card:border-[#00c2ff]/40 transition-colors"
            >
              {{ benefit }}
            </span>
          </div>
        </div>
        
        <!-- Action Arrow (Bottom Right) -->
        <div class="absolute bottom-6 right-6 opacity-0 transform translate-x-3 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
          <div class="w-9 h-9 bg-gradient-to-r from-[#0096e0] to-[#00c2ff] rounded-full flex items-center justify-center shadow-lg text-[#010217]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { animate } from 'animejs'
import { useI18n } from '@/i18n'
import ImageModal from './ImageModal.vue'

const { t } = useI18n()

interface Project {
  id: number
  title: string
  description: string
  image: string
  images?: string[]
  category: string
  tags: string[]
  technologies?: string[] // Repurposed as Benefits/Impact
  previewUrl?: string
  previewBrand?: string
  previewHeadline?: string
  previewSummary?: string
  previewStats?: Array<{ label: string; value: string }>
  result?: string
}

const props = defineProps<{
  project: Project
}>()

const imageRef = ref<HTMLElement | null>(null)
const activeImageIndex = ref(0)
const showModal = ref(false)

const displayImage = computed(() => {
  if (props.project.images && props.project.images.length > 0) {
    return props.project.images[activeImageIndex.value]
  }
  return props.project.image
})

const setImage = (index: number) => {
  activeImageIndex.value = index
}

const openModal = () => {
  showModal.value = true
}

const handleClick = () => {
  openModal()
}

const playHoverAnim = () => {
  if (imageRef.value) {
    animate(imageRef.value, {
      scale: 1.05,
      duration: 600,
      easing: 'easeOutQuad'
    })
  }
}

const resetHoverAnim = () => {
  if (imageRef.value) {
    animate(imageRef.value, {
      scale: 1.0,
      duration: 500,
      easing: 'easeOutQuad'
    })
  }
}
</script>
