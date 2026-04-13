<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16">
    <h1 class="text-5xl font-bold mb-4 tracking-tight">Our <span class="text-osGreen-500">Services</span></h1>
    <p class="text-xl text-slate-500 mb-16 max-w-2xl">We deliver high-end tech solutions for startups, NGOs, and enterprises.</p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title" class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-soft transition-all hover:-translate-y-2 group">
        <div class="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-osGreen-500 mb-6 group-hover:bg-osGreen-500 group-hover:text-slate-900 transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-3 dark:text-white">{{ service.title }}</h3>
        <p class="text-slate-500">{{ service.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const services = [
  { title: 'Custom Web Apps', desc: 'Scalable web platforms built with Vue, React, and Node.js.' },
  { title: 'Mobile Solutions', desc: 'Native applications for a mobile-first African audience.' },
  { title: 'Embedded Systems', desc: 'Hardware solutions using Arduino and Raspberry Pi.' },
  { title: 'Corporate Training', desc: 'Upskilling your team with modern software workflows.' },
  { title: 'Tech Consulting', desc: 'Strategic tech roadmaps for NGOs and local businesses.' },
  { title: 'UI/UX Design', desc: 'User-centric interfaces that convert and engage.' },
]
</script>