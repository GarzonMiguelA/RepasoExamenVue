<script setup>
import ListadoEjerciciosView from '@/views/ListadoEjerciciosView.vue';
import { ref, onMounted, watch } from 'vue';
import { getUsers } from '@/composables/getUsers';

const props = defineProps(['id']);
const usuario = ref(null);

// Función para obtener los datos del usuario según su ID
const fetchUser = async (id) => {
    const data = await getUsers();
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
    <ListadoEjerciciosView />

    <div>
        <h1>Detalle usuario</h1>
    </div>

    <!-- Solo mostramos la tabla si 'usuario' tiene un valor -->
    <table v-if="usuario">
        <thead>
            <tr>
                <th>ID</th>
                <th>username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Sitio Web</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.username }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.phone }}</td>
                <td>{{ usuario.website }}</td>
            </tr>
        </tbody>
    </table>

    <!-- Si no hay usuario, mostramos un mensaje -->
    <p v-else>Cargando usuario...</p>
</template>
