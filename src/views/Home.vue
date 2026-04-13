<template>
  <div class="overflow-hidden">
    
    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center bg-slate-950">
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
        class="absolute inset-0 w-full h-full object-cover"
        alt="Hero Background"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-3 rounded-3xl mb-10">
            <img :src="'/src/assets/OSTL logo.jpeg'" alt="Open Source Liberia" class="h-10 w-auto">
            <span class="text-white/70 text-sm font-medium tracking-widest">MONROVIA • LIBERIA</span>
          </div>

          <h1 class="text-6xl md:text-7xl lg:text-[82px] leading-[1.05] font-bold text-white tracking-tighter mb-8">
            Building Liberia's<br>tech future
          </h1>

          <p class="text-2xl text-slate-300 mb-12 max-w-lg">
            Practical training • Real software solutions • Lasting impact
          </p>

          <div class="flex flex-wrap gap-5">
            <button 
              @click="$router.push('/contact')"
              class="group bg-osGreen-500 hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-4 transition-all shadow-xl"
            >
              Free Consultation
              <span class="bg-slate-900 text-white p-2.5 rounded-2xl group-hover:rotate-45 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button 
              @click="$router.push('/programs')"
              class="border border-white/50 hover:border-white text-white px-9 py-5 rounded-2xl font-medium text-lg transition-all"
            >
              Browse Programs
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SHOWCASE - Smaller & Better Balanced -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-osGreen-500 text-sm font-bold tracking-widest uppercase">Watch</span>
          <h2 class="text-4xl font-bold text-white mt-3">Our Students in Action</h2>
        </div>

        <!-- Smaller Video Card -->
        <div class="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
          <video 
            ref="videoPlayer"
            class="w-full aspect-video"
            controls
            poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200"
          >
            <source src="https://youtu.be/O16mHnFcgic?si=sbmx52Kt4PyanDM-" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <p class="text-center text-slate-400 mt-6 text-sm">
          Students coding during the Software Engineering Bootcamp
        </p>
      </div>
    </section>

    <!-- PROGRAMS PHOTO GALLERY -->
    <section class="py-24 bg-slate-100 dark:bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="uppercase text-xs font-bold tracking-widest text-slate-400">Photo Evidence</span>
          <h2 class="text-5xl font-bold tracking-tight mt-3">Moments from Our Programs</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="(photo, index) in gallery" 
            :key="index"
            v-animate
            :style="{ transitionDelay: `${index * 50}ms` }"
            class="group relative rounded-3xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img 
              :src="photo.image" 
              :alt="photo.caption"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <p class="text-white font-medium leading-tight">{{ photo.caption }}</p>
              <p class="text-osGreen-400 text-xs mt-1">{{ photo.program }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const logoUrl = ref('https://storage.googleapis.com/a1aa/image/nJ030QzH9X5jH1q50W7mQ0YfHwUv517vV02xTee9Qz0.jpg')

const gallery = ref([
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    caption: "Late night coding",
    program: "Software Engineering Bootcamp"
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    caption: "Mobile App UI Design",
    program: "Mobile Development"
  },
  {
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800",
    caption: "Hardware Workshop",
    program: "Arduino & IoT"
  },
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800",
    caption: "Graduation Day",
    program: "Digital Literacy"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    caption: "Team Project Presentation",
    program: "Social Impact Lab"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    caption: "Building IoT Devices",
    program: "Hardware Training"
  }
])

const vAnimate = {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-12')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out')
        observer.unobserve(el)
      }
    }, { threshold: 0.15 })
    observer.observe(el)
  }
}
</script>