import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aigua',
      name: 'aigua',
      component: () => import('../views/aigua/listaEmbalsesView.vue'),
    },
    {
      path:'/aigua/:estaci',
      name: 'detalleAigua',
      component: () => import('../views/aigua/detalleAiguaView.vue'),
      props: route => ({ estaci: route.params.estaci }),
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('../views/compra/listaCompraView.vue'),
      
    }
  ],
})

export default router
