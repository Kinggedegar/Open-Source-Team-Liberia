<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
    
    <!-- Header -->
    <div class="text-center mb-20">
      <h1 class="text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
        Training <span class="text-osGreen-500">Programs</span>
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Hands-on, practical technology training designed to transform Liberian youth into skilled professionals and innovators.
      </p>
    </div>

    <!-- Programs Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(program, index) in programs" 
        :key="program.title"
        v-animate
        :style="{ transitionDelay: `${index * 80}ms` }"
        class="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-500"
      >
        <!-- Image -->
        <div class="relative h-64 overflow-hidden">
          <img 
            :src="program.image" 
            :alt="program.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <!-- Duration Badge -->
          <div class="absolute top-6 left-6 bg-black/80 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-2xl">
            {{ program.duration }}
          </div>
        </div>

        <!-- Content -->
        <div class="p-8">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
            {{ program.title }}
          </h3>
          
          <p class="text-slate-600 dark:text-slate-400 text-[15.5px] leading-relaxed mb-6 line-clamp-3">
            {{ program.shortDesc }}
          </p>

          <!-- Read More Button -->
          <button 
            @click="openProgramModal(program)"
            class="flex items-center gap-2 text-osGreen-600 dark:text-osGreen-400 hover:text-osGreen-700 font-semibold text-sm group-hover:gap-3 transition-all"
          >
            Read Full Program
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Program Detail Modal -->
    <Transition name="modal">
      <div v-if="selectedProgram" 
           class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div 
          class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          @click.stop
        >
          <!-- Modal Header Image -->
          <div class="relative h-72">
            <img 
              :src="selectedProgram.image" 
              :alt="selectedProgram.title"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <button 
              @click="closeModal"
              class="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div class="absolute bottom-6 left-6">
              <span class="text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white">
                {{ selectedProgram.duration }}
              </span>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-8 lg:p-12 overflow-y-auto max-h-[calc(90vh-288px)]">
            <h2 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              {{ selectedProgram.title }}
            </h2>

            <div class="prose dark:prose-invert text-slate-600 dark:text-slate-400 leading-relaxed">
              <p class="text-lg">{{ selectedProgram.fullDesc }}</p>
              
              <h4 class="font-semibold text-slate-900 dark:text-white mt-10 mb-4">What You'll Learn</h4>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li v-for="(item, i) in selectedProgram.learnings" :key="i" 
                    class="flex items-start gap-3">
                  <span class="text-osGreen-500 mt-1">→</span>
                  {{ item }}
                </li>
              </ul>

              <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-sm text-slate-500">Next Cohort Starts</p>
                    <p class="font-semibold text-lg">{{ selectedProgram.nextStart }}</p>
                  </div>
                  <button 
                    @click="closeModal"
                    class="bg-osGreen-500 hover:bg-osGreen-600 text-slate-900 font-bold px-10 py-4 rounded-2xl transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedProgram = ref(null)

const programs = ref([
  {
    title: "Software Engineering Bootcamp",
    shortDesc: "Master modern full-stack development with JavaScript, React, Node.js, and real-world project experience.",
    fullDesc: "Our flagship 12-week intensive bootcamp transforms beginners into job-ready full-stack developers. You will build multiple production-level applications, work in teams, and learn industry best practices used by top tech companies.",
    duration: "12 Weeks • Full-time",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    nextStart: "June 2026",
    learnings: [
      "HTML, CSS, JavaScript & TypeScript",
      "React.js & Next.js",
      "Node.js, Express & REST APIs",
      "PostgreSQL & MongoDB",
      "Git, GitHub & Agile workflows",
      "Deployment & DevOps basics"
    ]
  },
  {
    title: "Arduino & IoT Training",
    shortDesc: "Build smart devices and automated systems using Arduino, sensors, and wireless communication.",
    fullDesc: "Learn to bridge the digital and physical world. This hands-on program teaches you how to design, prototype, and deploy real IoT solutions — perfect for agriculture, healthcare, and smart city applications in Liberia.",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800",
    nextStart: "July 2026",
    learnings: [
      "Arduino programming & electronics",
      "Sensor integration",
      "Wireless communication (WiFi, Bluetooth)",
      "Data logging and visualization",
      "Building practical IoT projects",
      "Troubleshooting and prototyping"
    ]
  },
  {
    title: "Mobile App Development",
    shortDesc: "Create beautiful and functional Android & iOS applications using modern tools.",
    fullDesc: "From idea to App Store — learn how to design, develop, and publish mobile applications that solve real problems for Liberian users and businesses.",
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    nextStart: "May 2026",
    learnings: [
      "Flutter or React Native",
      "UI/UX design for mobile",
      "State management",
      "API integration",
      "App deployment",
      "Testing and debugging"
    ]
  },
  {
    title: "Digital Literacy & Empowerment",
    shortDesc: "Essential digital skills for beginners and under-represented youth.",
    fullDesc: "A foundational program designed to build confidence with technology. Perfect for students, women, and community members who want to participate meaningfully in the digital economy.",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800",
    nextStart: "Ongoing monthly",
    learnings: [
      "Computer fundamentals",
      "Microsoft Office & Google Workspace",
      "Internet safety and digital citizenship",
      "Basic web browsing and research",
      "Email and communication tools",
      "Introduction to coding"
    ]
  },
  {
    title: "Social Impact Lab",
    shortDesc: "Collaborative program where participants build tech solutions for local NGOs and communities.",
    fullDesc: "Work directly with NGOs and social enterprises to identify problems and develop technology-driven solutions. This program combines technical skills with social entrepreneurship.",
    duration: "14 Weeks",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    nextStart: "August 2026",
    learnings: [
      "Problem identification & research",
      "Human-centered design",
      "Building MVPs for social good",
      "Project management",
      "Stakeholder collaboration",
      "Impact measurement"
    ]
  }
])

const openProgramModal = (program) => {
  selectedProgram.value = program
}

const closeModal = () => {
  selectedProgram.value = null
}

// Animation directive
const vAnimate = {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-12')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('transition-all', 'duration-700', 'ease-out')
          el.classList.remove('opacity-0', 'translate-y-12')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>