<script setup>
import { ref, onMounted } from 'vue';
import { getUsers } from '@/composables/getUsers';
import { useRoute } from 'vue-router';

// Accedemos a la ruta para obtener el id
const route = useRoute();


const address = ref({});

const fetchAddress = async (id) => {
    const data = await getUsers();
    const user = data.find(user => user.id === id);
    address.value = user.address;
};

onMounted(() => {
    fetchAddress(Number(route.params.id));
});

</script>

<template>
    <h1>Dirección del usuario:</h1>
    <p>Calle: {{ address.street }}</p>
    <p>Suite: {{ address.suite }}</p>
    <p>Ciudad: {{ address.city }}</p>
    <p>Zipcode: {{ address.zipcode }}</p>
    
    <router-view></router-view>
</template>