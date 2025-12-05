import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'DevNA — Modern Web Development Agency', description: 'DevNA builds production-ready web applications, APIs, and scalable solutions.' } },
    { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Projects — DevNA', description: 'Explore production-ready projects and templates by DevNA.' } },
    { path: '/projects/:id', name: 'project-detail', component: () => import('../views/ProjectDetailView.vue'), meta: { title: 'Project Details — DevNA', description: 'Screenshots, features, and pricing for DevNA projects.' } },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About — DevNA (Development New Application)', description: 'DevNA is a web development agency focused on scalable, modern solutions.' } },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact — DevNA', description: 'Contact DevNA for web development solutions and ready-made apps.' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// Update document title and meta description per route
router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = String(to.meta.title)
  }
  if (to.meta?.description) {
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', String(to.meta.description))
    }
  }
})

export default router
