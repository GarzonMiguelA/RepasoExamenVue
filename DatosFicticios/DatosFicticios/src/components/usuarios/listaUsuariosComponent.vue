<script setup>
import ListadoEjerciciosView from '@/views/ListadoEjerciciosView.vue';
import { ref, onMounted } from 'vue';
import { getUsers } from '@/composables/getUsers';

//Creamos una variable reactiva para almacenar los usuarios
const usuarios = ref([]);

//Cuando el componente se monta llamamos a getUsers (el JS) para obtener los usuarios
onMounted(async () => {
    //Obtenemos los datos de la API y almacenamos en usuarios
    const data = await getUsers();
    usuarios.value = data;
    console.log(data);  
});
</script>


<template>
    <!-- Mostramos el menu: -->
    <ListadoEjerciciosView></ListadoEjerciciosView>
    <div>
        <h1>Usuarios</h1>
    </div>

    <!-- Mostramos toda la lista de usuarios con una tabla basandonos en la peticion axios recogida -->
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
            </tr>
        </thead>
        <tbody>
            <!-- Iteramos osbre la lista de usuarios con v-for -->
            <tr v-for="(usuario, index) in usuarios" :key="index">            
                <td> 
                    <!-- Creamos un enlace dinámico a cada user con routerLink -->
                    <RouterLink :to="`/usuarios/${usuario.id}`">{{ usuario.name }}</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Aqui renderizamos la vista del user al hacer clic en cada uno de ellos, es decir permitimos que se vea el detalle -->
    <router-view></router-view>
    
</template>