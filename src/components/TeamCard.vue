<template>
  <div class="group text-center bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
    <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white dark:border-slate-800 group-hover:border-osGreen-500 transition-colors">
      <img :src="image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all">
    </div>
    <h4 class="font-bold text-lg text-slate-900 dark:text-white">{{ name }}</h4>
    <p class="text-osGreen-500 text-sm font-medium mb-3">{{ role }}</p>
    <p class="text-slate-500 text-sm mb-4 line-clamp-3">{{ bio }}</p>
  </div>
</template>
<script setup>
defineProps({ image: String, name: String, role: String, bio: String })
</script>