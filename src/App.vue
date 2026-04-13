<template>
  <div class="min-h-screen font-sans">
    <Navbar />
    <main class="pt-24 pb-12">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <ChatWidget />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatWidget from './components/ChatWidget.vue'

const { initTheme } = useTheme()
onMounted(() => initTheme())
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>