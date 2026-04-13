import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'
import Services from '../views/Services.vue'
import Team from '../views/Team.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/programs', component: Programs },
  { path: '/services', component: Services },
  { path: '/team', component: Team },
  { path: '/faq', component: FAQ },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router