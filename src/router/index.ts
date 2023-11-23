import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/restricted',
      name: 'restricted',
      component: () => import('../pages/restricted.vue')
    }
  ]
})

export default router
