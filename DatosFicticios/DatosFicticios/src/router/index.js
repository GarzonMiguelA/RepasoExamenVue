import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ListadoEjerciciosView.vue'),
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../components/usuarios/listaUsuariosComponent.vue'),
      children:[
        {
          path: ':id', //Ruta dinamica
          name: 'detalleUsuario',
          component: () => import('../components/usuarios/DetalleUsuarioComponent.vue'),
          props: route => ({ id: Number(route.params.id) })
        }
      ]   
    }
  ],
})

export default router
