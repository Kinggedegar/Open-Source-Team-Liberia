<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 overflow-hidden">
    
    <!-- Hero Header -->
    <div class="text-center max-w-4xl mx-auto mb-20">
      <div class="inline-flex items-center gap-2 bg-osGreen-100 dark:bg-osGreen-900/30 text-osGreen-600 dark:text-osGreen-400 px-5 py-2 rounded-full text-sm font-medium mb-6">
        Since 2022 • Monrovia, Liberia
      </div>
      
      <h1 class="text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
        About <span class="text-osGreen-500">Open Source Liberia</span>
      </h1>
      
      <p class="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        We believe technology is the ultimate equalizer. By democratizing access to world-class software engineering 
        and digital skills, we are building a new generation of African innovators and problem solvers.
      </p>
    </div>

    <!-- Mission • Vision • Values -->
    <div class="grid md:grid-cols-3 gap-8 mb-28">
      <!-- Mission -->
      <div v-animate class="group bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div class="w-14 h-14 bg-osGreen-100 dark:bg-osGreen-900/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-osGreen-600 dark:text-osGreen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold mb-5 text-slate-900 dark:text-white">Our Mission</h3>
        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
          To bridge the digital divide in Liberia and West Africa by providing accessible, high-quality technology education 
          and delivering innovative, scalable software solutions that solve real local challenges.
        </p>
      </div>

      <!-- Vision -->
      <div v-animate style="transition-delay: 150ms" class="group bg-gradient-to-br from-osGreen-500 to-emerald-600 p-10 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold mb-5">Our Vision</h3>
        <p class="leading-relaxed text-white/90">
          A Liberia where every young person has the technical skills and confidence to innovate, create economic opportunities, 
          and solve pressing local and global challenges from home.
        </p>
      </div>

      <!-- Values -->
      <div v-animate style="transition-delay: 300ms" class="group bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div class="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17l1.333-2.667M18 17l-1.333-2.667M12 19l-2-4m4 0l2 4" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold mb-5 text-slate-900 dark:text-white">Our Values</h3>
        <ul class="space-y-4 text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-3">
            <span class="text-osGreen-500 mt-1 text-xl leading-none">•</span>
            Openness & Transparency
          </li>
          <li class="flex items-start gap-3">
            <span class="text-osGreen-500 mt-1 text-xl leading-none">•</span>
            Community First
          </li>
          <li class="flex items-start gap-3">
            <span class="text-osGreen-500 mt-1 text-xl leading-none">•</span>
            Excellence in Execution
          </li>
          <li class="flex items-start gap-3">
            <span class="text-osGreen-500 mt-1 text-xl leading-none">•</span>
            Continuous Innovation
          </li>
          <li class="flex items-start gap-3">
            <span class="text-osGreen-500 mt-1 text-xl leading-none">•</span>
            Measurable Social Impact
          </li>
        </ul>
      </div>
    </div>

    <!-- Our Story Section -->
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-28">
      <div v-animate>
        <span class="text-xs font-bold tracking-widest text-osGreen-500 uppercase">Our Story</span>
        <h2 class="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mt-4 mb-8">
          Born in Liberia,<br>Built for Africa
        </h2>
        <div class="space-y-6 text-lg text-slate-600 dark:text-slate-400">
          <p>
            Founded in 2022 in Monrovia, Open Source Liberia emerged from a simple but powerful observation: 
            Liberia has incredible young talent, but limited access to quality technology education and opportunities.
          </p>
          <p>
            What started as weekend coding sessions for university students has grown into a full-fledged technology 
            hub offering professional training, software development services, and digital transformation solutions 
            across Liberia and the region.
          </p>
        </div>
      </div>

      <div v-animate style="transition-delay: 200ms" class="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
          alt="Open Source Liberia Team"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div class="absolute bottom-8 left-8 text-white">
          <p class="text-sm uppercase tracking-widest opacity-75">Monrovia, Liberia • 2025</p>
          <p class="text-2xl font-semibold">Our Growing Team</p>
        </div>
      </div>
    </div>

    <!-- What We Do -->
    <div class="mb-20">
      <div class="text-center mb-12">
        <span class="uppercase text-xs font-bold tracking-widest text-slate-400">What We Actually Do</span>
        <h2 class="text-4xl font-bold mt-3">Technology Education + Real Solutions</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Education -->
        <div v-animate class="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18 9.246 18 10.832 18.477 12 19.253zm0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18 14.754 18 13.168 18.477 12 19.253z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Education & Training</h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400">
            We run intensive training programs in Full-Stack Development, Mobile App Development, 
            Data Science, Cybersecurity, UI/UX Design, and Digital Entrepreneurship. 
            Many of our graduates have gone on to work with local and international organizations.
          </p>
        </div>

        <!-- Software Development -->
        <div v-animate style="transition-delay: 150ms" class="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Software Development</h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400">
            We build custom software solutions, mobile applications, web platforms, and IoT systems 
            for businesses, NGOs, government institutions, and startups across Liberia.
          </p>
        </div>
      </div>
    </div>

    <!-- Closing CTA -->
    <div class="bg-slate-900 text-white rounded-3xl p-12 lg:p-16 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to be part of the movement?</h2>
      <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
        Whether you're a student, a business, or an organization — we're here to help you harness the power of technology.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="$router.push('/programs')"
          class="bg-osGreen-500 hover:bg-osGreen-600 text-slate-900 font-bold px-10 py-4 rounded-full transition-all flex items-center justify-center gap-3"
        >
          Join Our Training Programs
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7" />
          </svg>
        </button>
        <button 
          @click="$router.push('/contact')"
          class="border border-white/50 hover:border-white font-semibold px-10 py-4 rounded-full transition-all"
        >
          Work With Us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    }, { threshold: 0.15 })
    observer.observe(el)
  }
}
</script>