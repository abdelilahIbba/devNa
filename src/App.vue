<template>
  <div class="min-h-screen">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global styles are handled in main.css */
</style>
