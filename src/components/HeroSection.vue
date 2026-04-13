<template>
  <section class="px-4 lg:px-8 max-w-7xl mx-auto mb-20">
    <div class="relative bg-slate-900 rounded-[2.5rem] overflow-hidden min-h-[75vh] flex items-center shadow-2xl p-8 md:p-16 lg:p-24">
      <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      <div class="relative z-10 w-full md:w-2/3">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-osGreen-500/20 text-osGreen-400 text-sm font-semibold uppercase mb-6 border border-osGreen-500/30">
          <span class="w-2 h-2 rounded-full bg-osGreen-500 animate-pulse"></span>
          Tech For Impact
        </span>
        <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">Code. Create.<br><span class="text-osGreen-500">Transform.</span></h1>
        <p class="text-xl text-slate-300 mb-10 max-w-xl">We build real-world tech solutions and empower the next generation across Africa.</p>
        <div class="flex gap-4">
          <router-link to="/programs" class="bg-osGreen-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Explore Programs</router-link>
          <router-link to="/about" class="bg-transparent border border-slate-500 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Our Mission</router-link>
        </div>
      </div>
    </div>
  </section>
</template>