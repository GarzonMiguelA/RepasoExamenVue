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
      path: '/ganaderias',
      name: 'ganaderias',
      component: () => import('../views/ganaderias/ListadoGanaderiasView.vue'),
    },
    {
      path: '/ganaderias/:nom_explotaci',
      name: 'detalleExplotacion',
      component: () => import('../views/ganaderias/detalleExplotacionView.vue'),
      props: route => ({ nom_explotaci: route.params.nom_explotaci }), 
    },
  ],
})

export default router
