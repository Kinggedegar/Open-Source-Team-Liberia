<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32 overflow-hidden">
    
    <!-- Artistic Header -->
    <div class="text-center mb-24 relative">
      <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div class="w-96 h-96 bg-osGreen-500 rounded-full blur-3xl"></div>
      </div>
      
      <h1 class="text-6xl lg:text-7xl font-bold tracking-tighter mb-6 relative z-10">
        Meet the <span class="text-osGreen-500">Visionaries</span>
      </h1>
      <p class="text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-tight">
        The creative force shaping Liberia’s technological future
      </p>
      
      <!-- Decorative line -->
      <div class="w-24 h-px bg-gradient-to-r from-transparent via-osGreen-500 to-transparent mx-auto mt-10"></div>
    </div>

    <!-- Artistic Team Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div 
        v-for="(member, index) in team" 
        :key="member.name"
        v-animate
        :style="{ transitionDelay: `${index * 60}ms` }"
        class="group relative perspective-1000"
      >
        <div class="relative h-[380px] w-full rounded-[2.75rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-osGreen-500/30 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          
          <!-- Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-osGreen-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <!-- Image -->
          <div class="relative h-72 overflow-hidden">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            >
            
            <!-- Artistic Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <!-- Role Badge -->
            <div class="absolute top-6 right-6 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-4 py-1.5 rounded-2xl border border-white/20">
              {{ member.role.split(' ').slice(-2).join(' ') }}
            </div>
          </div>

          <!-- Info Section -->
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent pt-16">
            <h3 class="text-2xl font-bold text-white tracking-tight mb-1">{{ member.name }}</h3>
            <p class="text-osGreen-400 text-sm font-medium mb-4">{{ member.role }}</p>
            
            <p class="text-slate-300 text-[15px] leading-relaxed line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
              {{ member.bio }}
            </p>
          </div>

          <!-- Hover Accent Line -->
          <div class="absolute bottom-0 left-0 h-1 bg-osGreen-500 w-0 group-hover:w-full transition-all duration-500"></div>
        </div>

        <!-- Floating Name Plate (Artistic Touch) -->
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 shadow-xl px-8 py-3 rounded-3xl text-center border border-slate-100 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
          <p class="text-xs font-mono tracking-widest text-slate-400">{{ member.name.split(' ')[0] }}</p>
        </div>
      </div>
    </div>

    <!-- Artistic CTA -->
    <div class="mt-32 text-center">
      <div class="inline-block bg-gradient-to-r from-osGreen-500 to-emerald-600 text-white px-12 py-8 rounded-[2.5rem] shadow-2xl">
        <p class="text-lg mb-6">Ready to create history with us?</p>
        <button 
          @click="$router.push('/contact')"
          class="group bg-white text-slate-900 font-bold px-10 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform mx-auto"
        >
          Join the Movement
          <span class="block w-3 h-3 bg-osGreen-500 rounded-full group-hover:animate-ping"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  {
    name: 'Samuel David Nayreau',
    role: 'Founder & Lead Engineer',
    bio: 'Visionary full-stack developer building scalable systems and civic tech solutions that empower Liberian communities.',
    image: '/src/assets/sam.png' 
  },
  {
    name: 'Jedidiah Broderick',
    role: 'Digital Solutions',
bio: 'Innovative digital strategist, a seasoned professional Electrical Engineer, with 7 years of experience in digital transformation.',
    image: '/src/assets/jd.png'
  },
  {
    name: 'Marcus Tarnue',
    role: 'Senior Hardware Engineer',
    bio: 'IoT specialist and hardware wizard creating practical technological solutions for real-world challenges in Liberia.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800'
  },
  {
    name: 'Grace Kollie',
    role: 'Community & Impact Lead',
    bio: 'Community builder connecting technology with people. Champion of inclusive digital transformation across Liberia.',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800'
  },
  {
    name: 'Kelvin Kollie',
    role: 'Full-Stack Developer',
    bio: 'Modern web and mobile developer obsessed with clean architecture and exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800'
  },
  {
    name: 'Fatu Massaquoi',
    role: 'Creative Director & UI/UX',
    bio: 'Talented designer crafting beautiful, intuitive interfaces that resonate with African users and culture.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800'
  },
  {
    name: 'James Toe',
    role: 'AI & Data Science Lead',
    bio: 'Machine learning expert developing intelligent systems for education, agriculture, and healthcare in Liberia.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800'
  },
  {
    name: 'Comfort Gaye',
    role: 'Training & Operations',
    bio: 'Organizes impactful training programs and ensures every participant receives exceptional learning experience.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800'
  }
])

const vAnimate = {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-16', 'scale-95')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('transition-all', 'duration-700', 'ease-out')
          el.classList.remove('opacity-0', 'translate-y-16', 'scale-95')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    observer.observe(el)
  }
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>