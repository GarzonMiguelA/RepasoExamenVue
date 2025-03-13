<script setup>
import { ref, onMounted } from 'vue';
import ListadoEjercicios from '@/components/menu/ListadoEjercicios.vue';
import getEmbalses from '@/composables/getEmbalses.js';

// Variable reactiva para almacenar los embalses
const embalses = ref([]);

onMounted(async () => {
    embalses.value = await getEmbalses();
});
</script>

<template>
    <ListadoEjercicios></ListadoEjercicios>

    <h2>Listado de embalses de les Conques internes de Catalunya</h2>

    <table border="1">
        <thead>
            <tr>
                <th>Nombre del embalse</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(embalse, index) in embalses" :key="index">
                <td>{{ embalse.estaci }}</td>
            </tr>
        </tbody>
    </table>
</template>
