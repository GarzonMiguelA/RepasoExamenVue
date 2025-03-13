import { createRouter, createWebHistory } from 'vue-router';

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
      children: [
        {
          path: ':estaci',  // Ruta dinámica
          name: 'embalse',
          component: () => import('../components/aigua/DetalleEmbalse.vue'),
          props: true,  // Permite que los parámetros sean pasados como props
        },
      ],
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('../components/listadoCompra/ListaCompra.vue'),
    },
  ],
});

export default router;
