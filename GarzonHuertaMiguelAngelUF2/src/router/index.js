import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue'),
    // },
    // {
    //   path: '/aigua',
    //   name: 'aigua',
    //   component: () => import('../views/Aigua.vue'),
    // },

    {
      path: '/',
      name: 'home',
      component: () => import('../views/ListadoView.vue'),
    }
  ],
})

export default router
