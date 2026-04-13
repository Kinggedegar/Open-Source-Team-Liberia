<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Chat Window -->
    <transition 
      enter-active-class="transition ease-out duration-300" 
      enter-from-class="opacity-0 scale-95 translate-y-4" 
      enter-to-class="opacity-100 scale-100 translate-y-0" 
      leave-active-class="transition ease-in duration-150" 
      leave-from-class="opacity-100 scale-100 translate-y-0" 
      leave-to-class="opacity-0 scale-95 translate-y-4"
    >
      <div v-if="isOpen" class="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 mb-4 w-[350px] md:w-96 max-w-[calc(100vw-2rem)] h-[500px] flex flex-col overflow-hidden">
        
        <!-- Header -->
        <div class="bg-slate-900 text-white px-6 py-5 flex items-center justify-between shadow-md z-10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-osGreen-500 flex items-center justify-center text-slate-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-sm text-white">Open Source Assistant</h3>
              <p class="text-xs text-osGreen-400">Online & ready to help</p>
            </div>
          </div>
          <button @click="isOpen = false" class="hover:bg-white/20 p-2 rounded-full transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Messages Container -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 dark:bg-slate-900" ref="messagesContainer">
          
          <div v-if="messages.length === 0" class="text-center py-8">
            <div class="text-4xl mb-3">👋</div>
            <p class="text-slate-600 dark:text-slate-400 text-sm font-medium">Hello there!</p>
            <p class="text-slate-500 dark:text-slate-500 text-xs mt-2 px-4">I can answer questions about our programs, services, location, or connect you with our team.</p>
          </div>

          <!-- Messages -->
          <div v-for="(msg, idx) in messages" :key="idx" :class="['flex items-end gap-2', msg.type === 'user' ? 'justify-end' : 'justify-start']">
            <div :class="[
              'max-w-[85%] px-4 py-3 rounded-2xl text-sm break-words leading-relaxed shadow-sm',
              msg.type === 'user' 
                ? 'bg-osGreen-500 text-slate-900 rounded-br-none font-medium' 
                : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none'
            ]" v-html="msg.text">
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isSending" class="flex items-end gap-2">
            <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-4 py-4 rounded-2xl rounded-bl-none shadow-sm">
              <div class="flex gap-1.5">
                <div class="w-2 h-2 bg-osGreen-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-osGreen-500 rounded-full animate-bounce" style="animation-delay: 0.15s"></div>
                <div class="w-2 h-2 bg-osGreen-500 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-950 space-y-3">
          <div class="flex gap-3">
            <input 
              v-model="messageInput" 
              @keyup.enter="sendMessage"
              type="text" 
              placeholder="Ask me anything..." 
              class="flex-1 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 border-none focus:outline-none focus:ring-2 focus:ring-osGreen-500 text-sm transition-all"
            >
            <button 
              @click="sendMessage"
              :disabled="!messageInput.trim() || isSending"
              class="w-12 h-12 bg-slate-900 dark:bg-osGreen-500 hover:bg-slate-800 dark:hover:bg-osGreen-400 disabled:opacity-50 text-white dark:text-slate-900 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Button -->
    <button 
      @click="isOpen = !isOpen" 
      class="w-14 h-14 bg-slate-900 dark:bg-osGreen-500 rounded-full text-white dark:text-slate-900 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(0,229,0,0.3)] transition-all duration-300 transform hover:scale-110 z-50 relative"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const messageInput = ref('')
const messages = ref([])
const isSending = ref(false)
const messagesContainer = ref(null)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// SMART BOT KNOWLEDGE ENGINE
const generateBotResponse = (input) => {
  const text = input.toLowerCase()
  
  if (text.includes('program') || text.includes('learn') || text.includes('study') || text.includes('bootcamp')) {
    return "<strong>Our Programs:</strong> We offer a 6-month Software Engineering Bootcamp, Arduino & IoT Training, Mobile App Creation, and basic Digital Literacy courses. <br><br>Navigate to the <strong>Programs</strong> page in the menu to see them all!"
  }
  if (text.includes('service') || text.includes('build') || text.includes('app') || text.includes('website') || text.includes('hire')) {
    return "<strong>Our Services:</strong> We build Custom Web Apps, Native Mobile Apps, Embedded Systems (Arduino), and provide Corporate IT Training. <br><br>Check out our <strong>Services</strong> page for more details."
  }
  if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('reach')) {
    return "You can reach us at:<br>📧 <strong>hello@opensource.lr</strong><br>📞 <strong>+231 77 000 0000</strong><br><br>Or use the Contact page form!"
  }
  if (text.includes('where') || text.includes('location') || text.includes('address')) {
    return "We are headquartered in <strong>Monrovia, Liberia</strong>, but our digital reach and services extend globally! 🌍"
  }
  if (text.includes('who') || text.includes('about') || text.includes('mission') || text.includes('what is')) {
    return "<strong>Open Source Team Liberia</strong> is a collective of developers bridging the digital divide in Africa. We build software solutions and run bootcamps to equip youth with future-proof skills."
  }
  if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return "Hello! How can I help you today? You can ask me about our services, programs, or how to contact us."
  }
  if (text.includes('free') || text.includes('cost') || text.includes('price')) {
    return "We offer fully-funded scholarships for marginalized youth alongside paid corporate training to sustain our initiatives."
  }
  
  // Default fallback
  return "I'm not quite sure about that! But our human team would love to help.<br><br>👉 <a href='https://wa.me/231778288747' target='_blank' class='text-osGreen-600 font-bold underline'>Click here to chat with us on WhatsApp</a>"
}

const sendMessage = async () => {
  if (!messageInput.value.trim()) return

  const userText = messageInput.value
  
  // Add user message to chat
  messages.value.push({ type: 'user', text: userText })
  messageInput.value = ''
  await scrollToBottom()

  isSending.value = true
  
  // Simulate AI "thinking" delay
  setTimeout(() => {
    messages.value.push({
      type: 'bot',
      text: generateBotResponse(userText)
    })
    isSending.value = false
    scrollToBottom()
  }, 1200)
}
</script>
