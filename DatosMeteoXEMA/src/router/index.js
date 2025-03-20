import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>  import ('../views/BienvenidaView.vue')
      ,
    },
    {
      path: '/datosMeteorologicos',
      name: 'datosMeteorologicos',
      component: () => import ('../views/generalXemaView.vue'),
      children: [
        {
          path: ':id',
          name: 'restoXEMA',
          component: () => import ('../views/restoXEMAView.vue'),
          props: route => ({ id: route.params.id }) // No necesitas parseInt si el id no es un número
        }
      ]
    }
    
  ],
})

export default router
