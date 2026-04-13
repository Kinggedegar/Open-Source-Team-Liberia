<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
        Let's Build <span class="text-osGreen-500">Together</span>
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Whether you're a business, organization, student, or partner — we're excited to hear from you.
      </p>
    </div>

    <div class="grid lg:grid-cols-5 gap-10 lg:gap-16">
      
      <!-- Left Sidebar - Contact Info -->
      <div class="lg:col-span-2">
        <div class="sticky top-8 bg-slate-900 rounded-3xl p-10 lg:p-12 h-fit">
          <div class="mb-12">
            <div class="inline-flex items-center gap-3 bg-osGreen-500/10 text-osGreen-400 px-5 py-2 rounded-2xl mb-6">
              <div class="w-2 h-2 bg-osGreen-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium">Available for new projects</span>
            </div>
            
            <h2 class="text-4xl font-bold text-white leading-tight">
              Ready to start<br>something great?
            </h2>
          </div>

          <!-- Contact Details -->
          <div class="space-y-10">
            <!-- Location -->
            <div class="flex gap-5">
              <div class="w-11 h-11 rounded-2xl bg-osGreen-500/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-osGreen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-slate-400 mb-1">Our Location</p>
                <p class="text-white font-medium">Monrovia, Liberia</p>
                <p class="text-slate-400 text-sm">Broad Street • Sinkor</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex gap-5">
              <div class="w-11 h-11 rounded-2xl bg-osGreen-500/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-osGreen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2.01 2.01 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-slate-400 mb-1">Email Us</p>
                <a href="mailto:hello@opensource.lr" class="text-white hover:text-osGreen-400 transition-colors font-medium">
                  hello@opensource.lr
                </a>
              </div>
            </div>

            <!-- Phone / WhatsApp -->
            <div class="flex gap-5">
              <div class="w-11 h-11 rounded-2xl bg-osGreen-500/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-osGreen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 4.01V8" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-slate-400 mb-1">Call or WhatsApp</p>
                <a href="https://wa.me/231778288747" target="_blank" 
                   class="text-white hover:text-osGreen-400 transition-colors font-medium">
                  +231 77 828 8747
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="mt-16 pt-10 border-t border-slate-700">
            <p class="text-sm text-slate-400 mb-4">Or reach us directly on:</p>
            <a href="https://wa.me/231778288747" target="_blank"
               class="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 transition-colors py-4 rounded-2xl text-center font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="lg:col-span-3">
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-10 lg:p-14 shadow-xl border border-slate-100 dark:border-slate-700">
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">First Name</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  class="w-full bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-osGreen-500 rounded-2xl px-6 py-4 text-lg focus:outline-none transition-all"
                  placeholder="John"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Last Name</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  class="w-full bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-osGreen-500 rounded-2xl px-6 py-4 text-lg focus:outline-none transition-all"
                  placeholder="Doe"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Email Address</label>
              <input 
                v-model="form.email"
                type="email" 
                class="w-full bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-osGreen-500 rounded-2xl px-6 py-4 text-lg focus:outline-none transition-all"
                placeholder="you@example.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">How can we help you?</label>
              <textarea 
                v-model="form.message"
                rows="7"
                class="w-full bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-osGreen-500 rounded-3xl px-6 py-5 text-lg focus:outline-none transition-all resize-y"
                placeholder="Tell us about your project, training needs, partnership idea, or any other inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-osGreen-500 hover:bg-osGreen-600 disabled:bg-slate-400 text-slate-900 font-bold py-5 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!form.value.email || !form.value.message) return

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  alert("Thank you! Your message has been received. We'll get back to you soon.")

  form.value = { firstName: '', lastName: '', email: '', message: '' }
  isSubmitting.value = false
}
</script>