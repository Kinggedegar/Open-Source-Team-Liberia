<template>
  <nav class="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
    
    <!-- Glass Container -->
    <div class="w-full max-w-6xl rounded-2xl backdrop-blur-2xl bg-white/30 dark:bg-slate-900/40 border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
      
      <div class="h-16 px-5 flex items-center justify-between">
        
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center gap-2 group"
          @click="closeMenu"
        >
          <img 
            class="h-8 w-auto transition-transform duration-300 group-hover:scale-105" 
            src="/src/assets/OSTL logo.jpeg"
            alt="Logo"
          >
          <span class="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
            Open Source Team
            <span class="text-osGreen-500">LIBERIA</span>
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <router-link 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            class="px-4 py-2 text-sm rounded-xl transition-all duration-300 
                   text-slate-700 dark:text-white/70 
                   hover:text-osGreen-500 
                   hover:bg-black/5 dark:hover:bg-white/10"
            :class="isActive(link.path) ? 'bg-black/5 dark:bg-white/10 text-osGreen-500' : ''"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-2">
          
          <!-- Theme Toggle -->
          <div class="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <ThemeToggle />
          </div>

          <!-- CTA -->
          <router-link 
            to="/contact"
            class="hidden md:inline-flex items-center px-5 py-2 text-sm rounded-xl 
                   bg-slate-900 text-white 
                   dark:bg-osGreen-500 dark:text-slate-900 
                   font-medium shadow-md 
                   hover:scale-105 transition-all duration-300"
          >
            Contact
          </router-link>

          <!-- Hamburger -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-xl 
                   bg-white/40 dark:bg-white/5 backdrop-blur-md
                   text-slate-800 dark:text-white
                   border border-black/10 dark:border-white/10
                   hover:bg-white/60 dark:hover:bg-white/10
                   transition-all duration-300"
          >
            <svg 
              v-if="!isMobileMenuOpen" 
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>

            <svg 
              v-else 
              class="w-5 h-5 rotate-90 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-show="isMobileMenuOpen"
        class="absolute top-20 w-full max-w-6xl rounded-2xl backdrop-blur-2xl 
               bg-white/40 dark:bg-slate-900/50 
               border border-black/10 dark:border-white/10 
               shadow-xl md:hidden"
      >
        <div class="p-4 flex flex-col gap-2">
          
          <router-link 
            v-for="link in links" 
            :key="link.path"
            :to="link.path"
            @click="closeMenu"
            class="px-4 py-3 rounded-xl 
                   text-slate-700 dark:text-white/80 
                   hover:bg-black/5 dark:hover:bg-white/10 
                   hover:text-osGreen-500 
                   transition"
          >
            {{ link.name }}
          </router-link>

          <router-link 
            to="/contact"
            @click="closeMenu"
            class="mt-2 text-center 
                   bg-slate-900 text-white 
                   dark:bg-osGreen-500 dark:text-slate-900 
                   py-3 rounded-xl font-medium"
          >
            Contact Us
          </router-link>

        </div>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

watch(route, () => {
  closeMenu()
})

const isActive = (path) => route.path === path

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'FAQ', path: '/faq' }
]
</script>