<template>
  <section class="hero-variation relative overflow-hidden" :class="variant">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0" :style="backgroundGradient"></div>
      <div v-if="showGrid" class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div class="space-y-8">
          <div v-if="badge" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-current/30 bg-current/10 w-fit">
            <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            <span class="text-sm font-medium">{{ badge }}</span>
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" :class="textColor">
            {{ title }}
          </h2>

          <p class="text-lg opacity-90 max-w-xl leading-relaxed">
            {{ description }}
          </p>

          <div class="flex gap-4 flex-wrap">
            <slot name="buttons" />
          </div>
        </div>

        <!-- Image area -->
        <div v-if="$slots.image" class="relative h-96 md:h-full min-h-96">
          <slot name="image" />
        </div>
      </div>
    </div>

    <!-- Accent shapes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div v-if="showAccents" class="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 animate-float" :style="{ background: accentColor1 }"></div>
      <div v-if="showAccents" class="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float" :style="{ background: accentColor2, animationDelay: '1s' }"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface Props {
  variant?: 'light' | 'dark' | 'accent' | 'gradient'
  title: string
  description: string
  badge?: string
  backgroundGradient?: string
  textColor?: string
  showGrid?: boolean
  showAccents?: boolean
  accentColor1?: string
  accentColor2?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark',
  showGrid: true,
  showAccents: true,
  accentColor1: 'linear-gradient(135deg, #2563eb, #7c3aed)',
  accentColor2: 'linear-gradient(135deg, #a855f7, #2563eb)',
  backgroundGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
  textColor: 'text-white'
})
</script>

<style scoped>
.hero-variation {
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-variation.light {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%);
  color: #0f172a;
}

.hero-variation.dark {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: white;
}

.hero-variation.accent {
  background: linear-gradient(135deg, #0f172a 0%, rgba(37, 99, 235, 0.1) 50%, #0f172a 100%);
  color: white;
}

.hero-variation.gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #2563eb 50%, #1e293b 75%, #0f172a 100%);
  color: white;
}

@media (prefers-reduced-motion: reduce) {
  .hero-variation {
    --animate-float: none;
  }
}
</style>
