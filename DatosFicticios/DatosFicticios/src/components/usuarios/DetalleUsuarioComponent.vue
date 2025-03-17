<script setup>
import { ref, onMounted, watch } from 'vue';
import { getUsers } from '@/composables/getUsers';

// Definimos las props que recibimos del componente padre (id)
const props = defineProps(['id']);

// Creamos una variable reactiva para almacenar los datos del usuario
// Inicialmente se inicializa con 'null' hasta que se carguen los datos
const usuario = ref(null);

// Funcion asincrona que obntiene la lista de usuarios y filtra el usuario que conicida con el id
const fetchUser = async (id) => {
    // Llamamos a la funcion getUsers que obtiene los datos del user
    const data = await getUsers();

    // Buscamos en la lista del user cuyo id coincida con el ID que recibimos de las props
    usuario.value = data.find(user => user.id === id);
};

// Cargar el usuario al montar el componente
onMounted(() => {
    fetchUser(props.id);
});

// Observamos cambios en props.id y actualizamos el usuario
watch(() => props.id, (newId) => {
    fetchUser(newId);
});
</script>

<template>
    <div>
        <h1>Detalle usuario</h1>
    </div>

    <!-- Si usuario no es null, mostramos la tabla -->
    <table v-if="usuario">
        <thead>
            <tr>
                <th>ID</th>
                <th>username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Sitio Web</th>
                <th>Direccion</th>
                <th>Empresa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <!-- Mostramos los datos del usuario accediendo a las propiedades del JSON -->
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.username }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.phone }}</td>
                <td>{{ usuario.website }}</td>
                <td><RouterLink :to="`/usuarios/${usuario.id}/direccion`">Consultar</routerLink></td>
                <td><RouterLink :to="`/usuarios/${usuario.id}/empresa`">Consultar</routerLink></td>

            </tr>
        </tbody>
    </table>

    <router-view></router-view>
</template>
