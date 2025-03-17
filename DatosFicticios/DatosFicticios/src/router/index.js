import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue'),
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../components/usuarios/listaUsuariosComponent.vue'),
      children: [
        {
          path: ':id', // Ruta dinámica
          name: 'detalleUsuario',
          component: () => import('../components/usuarios/DetalleUsuarioComponent.vue'),
          props: route => ({ id: Number(route.params.id) }),
          children: [
            {
              path: 'direccion',
              name: 'detalleDireccion',
              component: () => import('../components/usuarios/DetalleDireccionComponent.vue'),
            },
            {
              path: 'empresa',
              name: 'detalleEmpresa',
              component: () => import('../components/usuarios/DetalleEmpresaComponent.vue'),
              props: route => ({ id: Number(route.params.id) }),
            }
          ]
        }
      ]
    }
  ],
})

export default router