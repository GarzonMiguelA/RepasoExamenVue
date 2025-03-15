<script setup>
import ListadoEjerciciosView from '@/views/ListadoEjerciciosView.vue';
import { ref, onMounted } from 'vue';
import { getUsers } from '@/composables/getUsers';

const usuarios = ref([]);

//LLamamos a la funcion getUsers para que nos devuelva la lista de usuarios
onMounted(async () => {
    const data = await getUsers();
    usuarios.value = data;
    console.log(data);  
});


</script>


<template>
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
            <tr v-for="(usuario, index) in usuarios" :key="index">            
                <td> 
                    <RouterLink :to="`/usuarios/${usuario.id}`">{{ usuario.name }}</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
    <router-view></router-view>
    
</template>