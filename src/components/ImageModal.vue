<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 px-4" @click.self="$emit('close')">
    <div class="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl orb-float"></div>
    <div class="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl orb-float-delayed"></div>

    <button
      @click="$emit('close')"
      class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div
      v-if="hasRichPreview"
      class="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/70 bg-slate-900/90 backdrop-blur-xl p-5 md:p-8 modal-enter"
    >
      <div class="mb-6 flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-blue-300/80">Project Preview</p>
          <h2 class="text-2xl md:text-3xl font-bold text-white">{{ projectPreviewBrand || projectTitle }}</h2>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-200 border border-blue-500/30">
          {{ projectCategory || 'Transport' }}
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div class="lg:col-span-5 bg-slate-800/45 rounded-2xl border border-slate-700/70 p-6 flex flex-col">
          <h3 class="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {{ projectPreviewHeadline || 'Modern Car Rental Experience' }}
          </h3>
          <p class="text-slate-300 leading-relaxed mb-6">
            {{ projectPreviewSummary || projectDescription }}
          </p>

          <div class="flex flex-wrap gap-2 mb-7">
            <span
              v-for="item in projectTechnologies || []"
              :key="item"
              class="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-500/15 text-blue-200 border border-blue-500/25"
            >
              {{ item }}
            </span>
          </div>

          <div class="mt-auto flex flex-wrap gap-3">
            <a
              v-if="projectUrl"
              :href="projectUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Open Live Preview
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h4m0 0v4m0-4L10 14" />
              </svg>
            </a>
            <button
              type="button"
              @click="$emit('close')"
              class="inline-flex items-center px-5 py-3 rounded-full bg-slate-700/70 hover:bg-slate-600 text-white font-medium transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </div>

        <div class="lg:col-span-7 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 md:p-5">
          <div class="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/80">
            <div class="h-10 flex items-center gap-2 px-4 border-b border-slate-700/60 bg-slate-900/80">
              <span class="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-300/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
              <span class="ml-3 text-xs text-slate-400 truncate">{{ projectUrl || 'Preview' }}</span>
            </div>

            <div class="relative">
              <img
                :src="currentImage"
                class="w-full h-[340px] md:h-[400px] object-cover"
                alt="Project visualization"
              />

              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div class="px-3 py-1.5 rounded-md bg-black/55 backdrop-blur-md text-slate-100 text-xs font-mono">
                  {{ currentIndex + 1 }} / {{ images.length }}
                </div>

                <div v-if="images.length > 1" class="flex items-center gap-2">
                  <button
                    @click.stop="prev"
                    class="p-2 rounded-full bg-slate-800/80 hover:bg-blue-600 text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    @click.stop="next"
                    class="p-2 rounded-full bg-slate-800/80 hover:bg-blue-600 text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        <div
          v-for="item in previewStats"
          :key="item.label"
          class="rounded-xl border border-slate-700/70 bg-slate-800/45 p-4"
        >
          <p class="text-slate-400 text-xs uppercase tracking-wider mb-1">{{ item.label }}</p>
          <p class="text-white text-2xl font-bold">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <template v-else>
      <button
        v-if="images.length > 1"
        @click.stop="prev"
        class="absolute left-4 p-3 rounded-full bg-slate-800/50 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 z-50 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="relative max-w-7xl max-h-[90vh] p-4 flex flex-col items-center modal-enter">
        <img
          :src="currentImage"
          class="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl shadow-blue-900/20"
          alt="Project visualization"
        />
        <div class="mt-4 text-slate-400 font-mono text-sm">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>

        <a
          v-if="projectUrl"
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Access {{ projectTitle || 'Project' }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h4m0 0v4m0-4L10 14" />
          </svg>
        </a>
      </div>

      <button
        v-if="images.length > 1"
        @click.stop="next"
        class="absolute right-4 p-3 rounded-full bg-slate-800/50 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 z-50 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
  initialIndex?: number
  projectUrl?: string
  projectTitle?: string
  projectDescription?: string
  projectCategory?: string
  projectTechnologies?: string[]
  projectPreviewBrand?: string
  projectPreviewHeadline?: string
  projectPreviewSummary?: string
  projectPreviewStats?: Array<{ label: string; value: string }>
}>()

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex || 0)

const currentImage = computed(() => props.images[currentIndex.value])

const hasRichPreview = computed(() => {
  return Boolean(props.projectPreviewBrand || props.projectPreviewHeadline || props.projectPreviewSummary)
})

const previewStats = computed(() => {
  if (props.projectPreviewStats && props.projectPreviewStats.length > 0) {
    return props.projectPreviewStats
  }

  return [
    { label: 'Category', value: props.projectCategory || 'Project' },
    { label: 'Modules', value: String(props.projectTechnologies?.length || 0) },
    { label: 'Screens', value: String(props.images.length) }
  ]
})

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-enter {
  animation: modalEnter 380ms ease-out;
}

.orb-float {
  animation: orbFloat 8s ease-in-out infinite;
}

.orb-float-delayed {
  animation: orbFloat 9s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes modalEnter {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes orbFloat {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-12px) translateX(8px);
  }
}
</style>
