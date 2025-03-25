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
    },
    {
      path: '/compraNOMIO',
      name: 'compraNOMIO',
      component: () => import('../views/compra/listaCompraNOMIOView.vue'),
    },
    {
      path: '/registroUsers',
      name: 'registroUsers',
      component: () => import('../views/registroUsers/registroUsersView.vue'), 
    },
    {
      path: '/calculadoraNotas',
      name: 'calculadoraNotas',
      component: () => import('../views/calculadoraNotas/calculadoraNotasView.vue'),
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: () => import('../views/inventario/añadirComponenteView.vue'),
      children: [
        {
          path: ':componentes',
          name: 'listaInventario',
          component: () => import('../views/inventario/listaComponenteView.vue'),
          props: route => ({ componentes: route.params.componentes }),
        }
      ]
    }
  ],
})

export default router
