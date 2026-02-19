<template>
  <div class="min-h-screen app-shell transition-colors duration-300">
    <Navbar />
    <RouterView />
    <StickyCTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import StickyCTA from './components/StickyCTA.vue'
</script>

<style>
/* Global styles are handled in main.css */
</style>
