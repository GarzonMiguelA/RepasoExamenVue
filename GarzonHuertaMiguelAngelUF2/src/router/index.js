import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ListadoView.vue'),
    },
    {
      path: '/aigua',
      name: 'aigua',
      component: () => import('../components/aigua/ListadoEmbalses.vue'),
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('../components/listadoCompra/ListaCompra.vue'),
    }
  ],
})

export default router
