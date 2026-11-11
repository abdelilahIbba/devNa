<template>
  <div class="min-h-screen bg-transparent pt-24 pb-16 page-view relative">
    <!-- Section Backlights for Contact View -->
    <div class="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-4xl h-[340px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/35 to-[#1E1B4B]/40 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>
    <div class="absolute top-2/3 right-10 w-[60%] max-w-3xl h-[300px] bg-gradient-to-r from-[#3B82F6]/35 via-[#00A8FF]/35 to-[#1E1B4B]/45 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>

    <div class="page-container relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
          <span v-html="t.contact.title"></span>
        </h1>
        <p class="text-lg sm:text-xl text-[#9aa8bc] max-w-2xl mx-auto leading-relaxed">
          {{ t.contact.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <!-- Contact Form Card (vision-glass-card) -->
        <div class="lg:col-span-2">
          <div class="vision-glass-card p-7 sm:p-10 shadow-2xl">
            <!-- Correct form title: Parlez-nous de votre projet / Tell us about your project -->
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              {{ t.contact.formTitle }}
            </h2>
            
            <!-- Status Alerts -->
            <div v-if="submitStatus.message" :class="[
              'mb-6 p-4 rounded-xl text-sm font-medium backdrop-blur-md',
              submitStatus.type === 'success' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
            ]">
              {{ submitStatus.message }}
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Interactive Project Scoper (محدد نطاق المشروع الذكي) -->
              <div class="vision-glass-inner p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-xl mb-6">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_8px_#00c2ff]"></span>
                    <h3 class="text-sm font-bold text-white font-mono-sys uppercase tracking-wider">
                      {{ t.contact.scoperTitle }}
                    </h3>
                  </div>
                  <span class="text-[11px] text-[#00c2ff] font-mono-sys hidden sm:inline">1-Click Quick Scope</span>
                </div>
                <p class="text-xs text-[#9aa8bc] mb-3.5">
                  {{ t.contact.scoperSubtitle }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="(label, key) in t.contact.scoperOptions"
                    :key="key"
                    type="button"
                    @click="selectScope(key, label)"
                    class="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 border"
                    :class="selectedScope === key
                      ? 'bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217] border-transparent shadow-[0_0_16px_rgba(0,194,255,0.45)] transform scale-[1.02]'
                      : 'bg-white/5 border-white/10 text-[#c8d0dc] hover:text-white hover:bg-white/10 hover:border-white/20'"
                  >
                    <svg v-if="selectedScope === key" class="w-3.5 h-3.5 text-[#010217]" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ label }}</span>
                  </button>
                </div>
              </div>

              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-[#c8d0dc] mb-2 font-mono-sys">
                  {{ t.contact.form.name }} *
                </label>
                <input 
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-xl vision-glass-inner border border-white/20 text-white placeholder-white/40 focus:border-[#00c2ff]/80 focus:ring-2 focus:ring-[#00c2ff]/20 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-[#c8d0dc] mb-2 font-mono-sys">
                  {{ t.contact.form.email }} *
                </label>
                <input 
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-xl vision-glass-inner border border-white/20 text-white placeholder-white/40 focus:border-[#00c2ff]/80 focus:ring-2 focus:ring-[#00c2ff]/20 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-[#c8d0dc] mb-2 font-mono-sys">
                  {{ t.contact.form.subject }}
                </label>
                <input 
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-3 rounded-xl vision-glass-inner border border-white/20 text-white placeholder-white/40 focus:border-[#00c2ff]/80 focus:ring-2 focus:ring-[#00c2ff]/20 transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-[#c8d0dc] mb-2 font-mono-sys">
                  {{ t.contact.form.message }} *
                </label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-xl vision-glass-inner border border-white/20 text-white placeholder-white/40 focus:border-[#00c2ff]/80 focus:ring-2 focus:ring-[#00c2ff]/20 transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSending"
                class="w-full px-8 py-4 bg-gradient-to-r from-[#0096e0] to-[#00c2ff] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-[#010217] rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_24px_rgba(0,194,255,0.3)] transform hover:scale-[1.01]"
              >
                <span v-if="!isSending">{{ t.contact.form.send }}</span>
                <span v-else>{{ t.contact.form.sending }}</span>
                <svg v-if="!isSending" class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-[#010217]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Info Sidebar (Unified dark vision-glass-card style) -->
        <div class="space-y-6">
          <!-- WhatsApp Card -->
          <div class="vision-glass-card p-7 text-white relative overflow-hidden group">
            <div class="absolute -top-12 -left-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>

            <div class="w-13 h-13 vision-glass-inner border border-white/20 rounded-2xl flex items-center justify-center mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ t.contact.whatsappTitle }}</h3>
            <p class="text-[#9aa8bc] mb-5 text-sm leading-relaxed">{{ t.contact.whatsappSubtitle }}</p>
            <a 
              href="https://wa.me/2120702627922"
              target="_blank"
              class="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-[0_0_16px_rgba(16,185,129,0.15)] transform hover:scale-[1.02]"
            >
              <span>{{ t.contact.chatNow }}</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Contact Details (vision-glass-card) -->
          <div class="vision-glass-card p-7 text-white">
            <h3 class="text-xl font-bold text-white mb-6">{{ t.contact.infoTitle }}</h3>
            <div class="space-y-5">
              <!-- Email (Unified with Footer: contact@devnapp.com) -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00c2ff]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono-sys text-[#9aa8bc] mb-1">{{ t.contact.emailLabel }}</div>
                  <a href="mailto:contact@devnapp.com" class="text-white font-medium hover:text-[#00c2ff] transition-colors">
                    contact@devnapp.com
                  </a>
                </div>
              </div>

              <!-- Phone (Unified with Footer: 0702627922 / +212 702-627922) -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00c2ff]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono-sys text-[#9aa8bc] mb-1">{{ t.contact.phoneLabel }}</div>
                  <a href="tel:0702627922" class="text-white font-medium hover:text-[#00c2ff] transition-colors">
                    0702627922
                  </a>
                </div>
              </div>

              <!-- Bureau Opérationnel -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00c2ff]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono-sys text-[#00c2ff] mb-1 uppercase tracking-wider">Bureau &amp; Réception Clients</div>
                  <div class="text-white font-medium text-sm">Av. Aicha Moussafer, Béni Makada, 90060 Tanger, Maroc</div>
                  <a href="https://www.google.com/maps?q=35.752597,-5.810243" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-xs text-[#00c2ff] hover:underline mt-1">
                    Itinéraire Google Maps →
                  </a>
                </div>
              </div>
              <!-- Siège Social -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#9aa8bc]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono-sys text-[#9aa8bc] mb-1 uppercase tracking-wider">Siège social</div>
                  <div class="text-white font-medium text-sm">Av. Moulay Youssef, Imm. Al Fath, Bloc A, 5ème Étage, N°17, Tanger, Maroc</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links (vision-glass-card) -->
          <div class="vision-glass-card p-7 text-white">
            <h3 class="text-xl font-bold text-white mb-5">{{ t.contact.followUs }}</h3>
            <div class="flex flex-wrap gap-3">
              <!-- Instagram (dual popover) -->
              <div class="relative" ref="igWrapRef">
                <button type="button" @click="igOpen = !igOpen"
                  class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="Instagram">
                  <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </button>
                <Transition name="ig-pop">
                  <div v-if="igOpen" class="absolute bottom-full left-0 mb-2 w-64 vision-glass-footer rounded-2xl p-4 z-50 shadow-2xl border border-white/20">
                    <p class="text-[10px] font-mono-sys uppercase tracking-widest text-[#00c2ff] mb-3">Nos comptes Instagram</p>
                    <a :href="SOCIAL_LINKS.instagramMain" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors mb-2">
                      <div class="w-9 h-9 rounded-lg vision-glass-inner border border-white/20 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </div>
                      <div><p class="text-white text-sm font-semibold">DEVNAPP</p><p class="text-[#9aa8bc] text-xs">Projets &amp; Vidéos Clients</p></div>
                    </a>
                    <a :href="SOCIAL_LINKS.instagramMedia" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors">
                      <div class="w-9 h-9 rounded-lg vision-glass-inner border border-white/20 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </div>
                      <div><p class="text-white text-sm font-semibold">DEVNAPP Media</p><p class="text-[#9aa8bc] text-xs">Coulisses, Studio &amp; Trends</p></div>
                    </a>
                  </div>
                </Transition>
              </div>
              <!-- Facebook -->
              <a :href="SOCIAL_LINKS.facebook" target="_blank" rel="noopener noreferrer" class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="Facebook">
                <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <!-- TikTok -->
              <a :href="SOCIAL_LINKS.tiktok" target="_blank" rel="noopener noreferrer" class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="TikTok">
                <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <!-- X -->
              <a :href="SOCIAL_LINKS.x" target="_blank" rel="noopener noreferrer" class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="X">
                <svg class="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <!-- LinkedIn -->
              <a :href="SOCIAL_LINKS.linkedin" target="_blank" rel="noopener noreferrer" class="w-[42px] h-[42px] vision-glass-inner border border-white/20 rounded-xl flex items-center justify-center hover:border-[#00c2ff]/60 hover:shadow-[0_0_14px_rgba(0,194,255,0.35)] transition-all text-[#9aa8bc] hover:text-white" aria-label="LinkedIn">
                <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <!-- Availability (vision-glass-card with soft cyan/emerald pulsing dot) -->
          <div class="vision-glass-card p-7 text-white relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-36 h-36 bg-[#00c2ff]/12 rounded-full blur-2xl pointer-events-none"></div>

            <div class="flex items-center space-x-2.5 mb-3">
              <span class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
              <span class="font-bold text-white text-base">{{ t.contact.availabilityTitle }}</span>
            </div>
            <p class="text-sm text-[#9aa8bc] leading-relaxed">
              {{ t.contact.availabilitySubtitle }}
            </p>
          </div>

          <!-- Google Maps — Bureau Opérationnel (lazy-loaded, zero initial weight) -->
          <div class="vision-glass-card overflow-hidden p-0">
            <div class="p-5 pb-3">
              <h3 class="text-base font-bold text-white flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Bureau &amp; Réception Clients
              </h3>
              <p class="text-xs text-[#9aa8bc] mt-1">Av. Aicha Moussafer, Béni Makada, 90060 Tanger, Maroc</p>
            </div>
            <div class="rounded-b-2xl overflow-hidden h-44">
              <iframe
                src="https://maps.google.com/maps?q=35.752597,-5.810243&hl=fr&z=15&output=embed"
                class="w-full h-full border-0 opacity-90"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Bureau DEVNAPP — Tanger"
              ></iframe>
            </div>
            <div class="p-4 pt-3">
              <a href="https://www.google.com/maps?q=35.752597,-5.810243" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#010217] bg-gradient-to-r from-[#0096e0] to-[#00c2ff] hover:brightness-110 transition-all shadow-[0_0_16px_rgba(0,194,255,0.3)]">
                Itinéraire Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n'
import emailjs from '@emailjs/browser'
import { SOCIAL_LINKS } from '@/config/socials'

const { t, locale } = useI18n()

// Dual Instagram Popover
const igOpen = ref(false)
const igWrapRef = ref<HTMLElement | null>(null)

function handleIgOutside(e: MouseEvent) {
  if (igWrapRef.value && !igWrapRef.value.contains(e.target as Node)) {
    igOpen.value = false
  }
}

function handleIgEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') igOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleIgOutside, true)
  document.addEventListener('keydown', handleIgEsc)
})

onUnmounted(() => {
  document.removeEventListener('click', handleIgOutside, true)
  document.removeEventListener('keydown', handleIgEsc)
})

// Interactive Project Scoper state
const selectedScope = ref<string>('')

const selectScope = (key: string, label: string) => {
  if (selectedScope.value === key) {
    selectedScope.value = ''
    return
  }
  selectedScope.value = key
  form.value.subject = `[${label}] - Projet DEVNAPP`

  const isFr = locale.value === 'fr'
  const isAr = locale.value === 'ar'

  if (isFr) {
    form.value.message = `Bonjour l'équipe DEVNAPP,\n\nJe souhaite échanger avec vous concernant notre projet : ${label}.\n\nBesoins clés :\n- Digitalisation et centralisation de nos flux opérationnels\n- Interface moderne, rapide et ergonomique\n- Objectif de mise en production sous 1 à 3 mois\n\nMerci de nous contacter pour convenir d'une première démonstration / échange technique.`
  } else if (isAr) {
    form.value.message = `مرحباً فريق DEVNAPP،\n\nنرغب في مناقشة تفاصيل مشروعنا في مجال: ${label}.\n\nالاحتياجات الرئيسية:\n- رقمنة وأتمتة العمليات التشغيلية\n- واجهة استخدام حديثة وسريعة ومتطورة\n- الإطلاق المستهدف: خلال شهر إلى 3 أشهر\n\nيرجى التواصل معنا لتحديد جلسة استكشافية أولى.`
  } else {
    form.value.message = `Hello DEVNAPP team,\n\nWe would like to discuss our upcoming project: ${label}.\n\nKey Needs:\n- Digitalize and centralize our operational workflows\n- High-performance, modern and intuitive UI\n- Target launch: within 1 to 3 months\n\nPlease reach out to schedule an initial discovery call.`
  }
}

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const submitStatus = ref({ type: '', message: '' })

const handleSubmit = async () => {
  if (isSending.value) return
  isSending.value = true
  submitStatus.value = { type: '', message: '' }

  try {
    const serviceId = 'service_z5v21ec'
    const templateId = 'template_xzy02jf'
    const publicKey = 'ogirkO1n0Z6oz0JxC'

    const templateParams = {
      to_name: 'DEVNAPP Team',
      from_name: form.value.name,
      from_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      reply_to: form.value.email
    }

    if (serviceId === 'service_z5v21ec' && templateId === 'template_xzy02jf' && publicKey === 'ogirkO1n0Z6oz0JxC') {
       console.log('Simulation: Sending email to contact@devnapp.com', templateParams)
       await new Promise(resolve => setTimeout(resolve, 1200))
    } else {
       await emailjs.send(serviceId, templateId, templateParams, publicKey)
    }

    submitStatus.value = { 
      type: 'success', 
      message: t.value.contact.success 
    }
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    console.error('Failed to send email:', error)
    submitStatus.value = { 
      type: 'error', 
      message: t.value.contact.error 
    }
  } finally {
    isSending.value = false
  }
}
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
