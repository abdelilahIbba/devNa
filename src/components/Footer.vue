<template>
  <footer class="pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent text-[#9aa8bc] relative z-10">
    <div class="max-w-6xl mx-auto vision-glass-footer">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
        <!-- Brand + Social Icons -->
        <div class="space-y-6">
          <router-link to="/" class="inline-flex items-center" aria-label="DEVNAPP home">
            <BrandLogo variant="nav" size="md" class="max-h-12 w-auto" />
          </router-link>
          <p class="text-sm leading-relaxed max-w-xs text-[#c8d0dc]">
            {{ t.footer.description }}
          </p>

          <!-- Social Icons Row (42x42px, vision-glass-inner, cyan hover glow) -->
          <div class="flex gap-3 flex-wrap">
            <!-- Instagram (Dual-Account Popover) -->
            <div class="relative" ref="igWrapRef">
              <button
                type="button"
                @click="toggleIgPopover"
                class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white"
                aria-label="Instagram"
              >
                <!-- Instagram SVG -->
                <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </button>

              <!-- Dual-Instagram Glass Popover -->
              <Transition name="ig-pop">
                <div
                  v-if="igPopoverOpen"
                  class="absolute bottom-full left-0 mb-2 w-64 vision-glass-footer rounded-2xl p-4 z-50 shadow-2xl border border-white/20"
                >
                  <p class="text-[10px] font-mono-sys uppercase tracking-widest text-[#00c2ff] mb-3">Nos comptes Instagram</p>
                  <a
                    :href="SOCIAL_LINKS.instagramMain"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group mb-2"
                  >
                    <div class="w-9 h-9 rounded-lg vision-glass-inner border border-white/20 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <p class="text-white text-sm font-semibold">DEVNAPP</p>
                      <p class="text-[#9aa8bc] text-xs">Projets & Vidéos Clients</p>
                    </div>
                  </a>
                  <a
                    :href="SOCIAL_LINKS.instagramMedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div class="w-9 h-9 rounded-lg vision-glass-inner border border-white/20 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <p class="text-white text-sm font-semibold">DEVNAPP Media</p>
                      <p class="text-[#9aa8bc] text-xs">Coulisses, Studio & Trends</p>
                    </div>
                  </a>
                </div>
              </Transition>
            </div>

            <!-- Facebook -->
            <a :href="SOCIAL_LINKS.facebook" target="_blank" rel="noopener noreferrer"
              class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="Facebook">
              <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            <!-- TikTok -->
            <a :href="SOCIAL_LINKS.tiktok" target="_blank" rel="noopener noreferrer"
              class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="TikTok">
              <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>

            <!-- X (formerly Twitter) -->
            <a :href="SOCIAL_LINKS.x" target="_blank" rel="noopener noreferrer"
              class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="X">
              <svg class="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            <!-- LinkedIn -->
            <a :href="SOCIAL_LINKS.linkedin" target="_blank" rel="noopener noreferrer"
              class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="LinkedIn">
              <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Systems -->
        <div>
          <h4 class="font-display font-semibold mb-6 text-white">{{ t.footer.systems }}</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/projects" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.caseStudies }}</router-link></li>
            <li><a href="#" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.enterprise }}</a></li>
            <li><a href="#" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.integrations }}</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-display font-semibold mb-6 text-white">{{ t.footer.company }}</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/about" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.aboutUs }}</router-link></li>
            <li><a href="#" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.careers }}</a></li>
            <li><router-link to="/contact" class="hover:text-[#00c2ff] transition-colors">{{ t.footer.contact }}</router-link></li>
          </ul>
        </div>

        <!-- Addresses -->
        <div>
          <h4 class="font-display font-semibold mb-6 text-white">{{ t.footer.reach }}</h4>
          <div class="space-y-5 text-sm">
            <!-- Bureau Opérationnel -->
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#00c2ff] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div>
                <p class="text-white font-medium">Bureau</p>
                <p class="text-xs text-[#c8d0dc] mt-0.5 leading-relaxed">Av. Aicha Moussafer, Béni Makada,<br>90060 Tanger, Maroc</p>
                <a href="https://www.google.com/maps?q=35.752597,-5.810243" target="_blank" rel="noopener noreferrer" class="text-[11px] mt-1 text-[#00c2ff] font-mono-sys uppercase tracking-wider hover:underline inline-block">{{ t.footer.hub }} →</a>
              </div>
            </div>
            <!-- Siège Social -->
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#9aa8bc] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              <div>
                <p class="text-white font-medium">Siège social</p>
                <p class="text-xs text-[#c8d0dc] mt-0.5 leading-relaxed">Av. Moulay Youssef, Imm. Al Fath,<br>Bloc A, 5ème Étage, N°17,<br>Tanger, Maroc</p>
              </div>
            </div>
            <!-- Contact -->
            <a href="mailto:contact@devnapp.com" class="flex items-center gap-3 hover:text-white transition-colors">
              <svg class="w-5 h-5 text-[#00c2ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              contact@devnapp.com
            </a>
            <a href="tel:0702627922" class="flex items-center gap-3 hover:text-white transition-colors">
              <svg class="w-5 h-5 text-[#00c2ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.95 1.55l.57 2.49a2 2 0 01-.58 1.93l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.93-.58l2.49.57A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.16 23 1 14.84 1 5V4a1 1 0 011-1h1z"/></svg>
              0702627922
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9aa8bc]">
        <p>&copy; 2026 DEVNAPP. {{ t.footer.rights }}</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">{{ t.footer.privacy }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t.footer.terms }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t.footer.sitemap }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BrandLogo from '@/components/BrandLogo.vue'
import { useI18n } from '@/i18n'
import { SOCIAL_LINKS } from '@/config/socials'

const { t } = useI18n()

// Dual Instagram Popover
const igPopoverOpen = ref(false)
const igWrapRef = ref<HTMLElement | null>(null)

function toggleIgPopover() {
  igPopoverOpen.value = !igPopoverOpen.value
}

function handleOutsideClick(e: MouseEvent) {
  if (igWrapRef.value && !igWrapRef.value.contains(e.target as Node)) {
    igPopoverOpen.value = false
  }
}

function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') igPopoverOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick, true)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick, true)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.ig-pop-enter-active,
.ig-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.ig-pop-enter-from,
.ig-pop-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.97);
}
</style>
