<template>
  <div class="max-w-4xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Questions? <span class="text-osGreen-500">Answers.</span>
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Find quick answers to the most common questions about our services, training programs, and how we work.
      </p>
    </div>

    <!-- FAQ Accordion -->
    <div class="space-y-4">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <!-- Question -->
        <button
          @click="toggleFAQ(index)"
          class="w-full px-8 py-6 flex items-center justify-between text-left group focus:outline-none"
        >
          <span class="text-lg font-semibold text-slate-900 dark:text-white pr-8">
            {{ faq.question }}
          </span>
          <span 
            class="w-8 h-8 flex-shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-all duration-300 group-hover:bg-osGreen-100 dark:group-hover:bg-osGreen-900"
            :class="{ 'rotate-180': openIndex === index }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500 dark:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        <!-- Answer -->
        <div 
          v-if="openIndex === index"
          class="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-2"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>

    <!-- Still Have Questions -->
    <div class="mt-20 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-3xl p-10 text-center">
      <h3 class="text-2xl font-semibold mb-3">Still have questions?</h3>
      <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Our team is ready to help. Reach out to us directly and we'll get back to you quickly.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="$router.push('/contact')"
          class="bg-osGreen-500 hover:bg-osGreen-600 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-3 shadow-lg shadow-osGreen-500/30"
        >
          Get in Touch
        </button>
        
        <a 
          href="https://wa.me/231778288747"
          target="_blank"
          class="border border-slate-300 dark:border-slate-600 hover:border-osGreen-500 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = ref([
  {
    question: "What services do you offer?",
    answer: "We specialize in custom software development, mobile app development, web solutions, IoT & hardware integration, and enterprise systems. We also provide comprehensive technology training and capacity building programs."
  },
  {
    question: "Do you offer training programs?",
    answer: "Yes. We run professional training in Software Development, Web Development, Mobile App Development, Cybersecurity, Data Science, and Digital Literacy. Our programs are designed for both individuals and corporate teams."
  },
  {
    question: "Where are you located?",
    answer: "We are based in Monrovia, Liberia, and serve clients across West Africa and internationally."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. Small to medium projects usually take 4–12 weeks, while larger enterprise solutions can take 3–6 months. We provide clear timelines during the consultation phase."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely. We love working with startups, SMEs, NGOs, and government institutions. We offer flexible pricing and scalable solutions tailored to your budget and needs."
  },
  {
    question: "What is your process for starting a new project?",
    answer: "We begin with a free consultation to understand your goals, followed by detailed requirements gathering, proposal, and project kickoff. We maintain transparent communication throughout the entire development lifecycle."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes. We offer post-launch support, maintenance packages, updates, and training for your internal team so you can manage and grow your solution confidently."
  }
])

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>