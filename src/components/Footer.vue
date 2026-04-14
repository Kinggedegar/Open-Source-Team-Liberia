<template>
  <footer class="bg-gradient-to-br from-white via-slate-50 dark:from-slate-950 dark:via-slate-900 to-white dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <img class="h-10 w-auto" src="/src/assets/OSTL logo.jpeg" alt="Logo">
            <span class="font-bold text-lg text-slate-900 dark:text-white">Open Source Team it <span class="text-osGreen-500">LIBERIA</span></span>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
            Bridging the digital divide in Africa through high-impact technology solutions, education, and sustainable innovation for communities in Liberia.
          </p>
          <!-- Social Links -->
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-osGreen-500 hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-osGreen-500 hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.55 4.932 4.932 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-osGreen-500 hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.555v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.381c.43-.667 1.199-1.616 2.922-1.616 2.135 0 3.732 1.39 3.732 4.377v5.627zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.706 0-.967.771-1.71 1.958-1.71 1.187 0 1.914.743 1.939 1.71 0 .948-.752 1.706-1.982 1.706zm1.582 11.019H3.771V9.684h3.148v10.768zM22.225 0H1.771C.798 0 0 .774 0 1.729v20.542C0 23.227.798 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-osGreen-500 hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-11c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-osGreen-500 rounded-full"></span>
            Navigation
          </h4>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Home</router-link></li>
            <li><router-link to="/about" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">About Us</router-link></li>
            <li><router-link to="/programs" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Programs</router-link></li>
            <li><router-link to="/services" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Services</router-link></li>
            <li><router-link to="/team" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Our Team</router-link></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-osGreen-500 rounded-full"></span>
            Resources
          </h4>
          <ul class="space-y-3">
            <li><router-link to="/faq" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">FAQ</router-link></li>
            <li><a href="#" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Documentation</a></li>
            <li><a href="#" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Blog</a></li>
            <li><a href="#" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Careers</a></li>
            <li><a href="#" class="text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors text-sm font-medium">Press Kit</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-osGreen-500 rounded-full"></span>
            Contact
          </h4>
          <div class="space-y-4">
            <div>
              <p class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Email</p>
              <a href="mailto:hello@opensource.lr" class="text-slate-900 dark:text-white font-semibold hover:text-osGreen-500 transition-colors">hello@opensource.lr</a>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Phone</p>
              <a href="tel:+231770000000" class="text-slate-900 dark:text-white font-semibold hover:text-osGreen-500 transition-colors">+231 770 000 000</a>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Location</p>
              <p class="text-slate-900 dark:text-white font-semibold">Monrovia, Liberia</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-200 dark:border-slate-800 pt-8">
        <!-- Newsletter CTA -->
        <div class="bg-gradient-to-r from-osGreen-50 to-osGreen-100 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 mb-10">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Stay Updated</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm">Subscribe to get the latest news and updates from our community.</p>
            </div>
            <div class="flex gap-2">
              <input type="email" placeholder="Your email" class="px-4 py-3 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-osGreen-500 w-full md:w-48">
              <button class="px-6 py-3 bg-osGreen-500 hover:bg-osGreen-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p class="text-sm text-slate-600 dark:text-slate-400">
            &copy; 2025 Open Source Team Liberia. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors font-medium">Privacy Policy</a>
            <a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors font-medium">Terms of Service</a>
            <a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-osGreen-500 transition-colors font-medium">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>