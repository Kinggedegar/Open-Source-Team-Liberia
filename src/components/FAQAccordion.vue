<template>
  <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mb-4">
    <button @click="isOpen = !isOpen" class="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
      <span class="font-semibold text-lg text-slate-900 dark:text-white">{{ question }}</span>
      <span class="text-osGreen-500 transition-transform duration-300" :class="{'rotate-45': isOpen}">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </span>
    </button>
    <div v-show="isOpen" class="px-6 pb-5 text-slate-600 dark:text-slate-400">
      {{ answer }}
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({ question: String, answer: String })
const isOpen = ref(false)
</script>