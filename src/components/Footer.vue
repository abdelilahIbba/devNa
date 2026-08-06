<template>
  <footer class="py-16 transition-colors duration-300" :class="isDark ? 'bg-slate-950 border-t border-slate-800 text-slate-400' : 'bg-white border-t border-slate-200 text-slate-600'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand -->
        <div class="space-y-6">
          <router-link to="/" class="inline-flex items-center" aria-label="DEVNAPP home">
            <BrandLogo variant="nav" size="md" class="max-h-12 w-auto" />
          </router-link>
          <p class="text-sm leading-relaxed max-w-xs">
            Forging digital excellence through futuristic engineering and immersive design.
          </p>
          <div class="flex gap-4">
             <!-- Socials (Placeholders) -->
             <a href="#" class="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all" :class="isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300'">
                <span class="sr-only">Twitter</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full border flex items-center justify-center transition-all" :class="isDark ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 hover:border-white' : 'bg-slate-100 border-slate-300 hover:bg-slate-200 hover:border-slate-400'">
                <span class="sr-only">GitHub</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold mb-6" :class="isDark ? 'text-white' : 'text-slate-900'">Product</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/projects" class="hover:text-blue-400 transition-colors">Case Studies</router-link></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Enterprise Solutions</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Components</a></li>
          </ul>
        </div>

         <div>
          <h4 class="font-semibold mb-6" :class="isDark ? 'text-white' : 'text-slate-900'">Company</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/about" class="hover:text-blue-400 transition-colors">About Us</router-link></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><router-link to="/contact" class="hover:text-blue-400 transition-colors">Contact</router-link></li>
          </ul>
        </div>

        <!-- Newsletter? or Contact -->
        <div>
           <h4 class="font-semibold mb-6" :class="isDark ? 'text-white' : 'text-slate-900'">Global Reach</h4>
           <div class="space-y-3 text-sm">
             <div class="flex items-start gap-3">
               <svg class="w-5 h-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               <div>
                 <p :class="isDark ? 'text-white' : 'text-slate-900'">Casablanca, Morocco</p>
                 <p class="text-xs mt-1">Innovation Hub</p>
               </div>
             </div>
             <a href="mailto:contact@devnapp.com" class="flex items-center gap-3 transition-colors" :class="isDark ? 'hover:text-white' : 'hover:text-slate-900'">
                <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               contact@devnapp.com
             </a>
             <a href="tel:0702627922" class="flex items-center gap-3 transition-colors" :class="isDark ? 'hover:text-white' : 'hover:text-slate-900'">
               <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.95 1.55l.57 2.49a2 2 0 01-.58 1.93l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.93-.58l2.49.57A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.16 23 1 14.84 1 5V4a1 1 0 011-1h1z" /></svg>
               0702627922
             </a>
           </div>
        </div>

      </div>
      
      <div class="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs" :class="isDark ? 'border-slate-800' : 'border-slate-200'">
        <p>&copy; 2026 DevNApp. All rights reserved.</p>
         <div class="flex gap-6">
        <a href="#" class="transition-colors" :class="isDark ? 'hover:text-white' : 'hover:text-slate-900'">Privacy</a>
        <a href="#" class="transition-colors" :class="isDark ? 'hover:text-white' : 'hover:text-slate-900'">Terms</a>
        <a href="#" class="transition-colors" :class="isDark ? 'hover:text-white' : 'hover:text-slate-900'">Sitemap</a>
         </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import BrandLogo from '@/components/BrandLogo.vue'

const { theme } = useTheme()
const isDark = computed(() => theme.value === 'dark')
</script>
