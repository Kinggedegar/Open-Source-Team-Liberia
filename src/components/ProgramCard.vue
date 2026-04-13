<template>
  <div class="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-glass border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300">
    <div class="h-48 overflow-hidden relative">
      <img :src="image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
    </div>
    <div class="p-8 relative">
      <div class="absolute -top-6 right-6 w-12 h-12 bg-osGreen-500 rounded-full flex items-center justify-center text-slate-900 shadow-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{{ desc }}</p>
      <button class="font-semibold text-osGreen-600 dark:text-osGreen-400 flex items-center gap-2 hover:gap-4 transition-all">Read More <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
    </div>
  </div>
</template>
<script setup>
defineProps({ image: String, title: String, desc: String })
</script>