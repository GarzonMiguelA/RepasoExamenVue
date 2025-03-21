<script setup>
import { ref, onMounted } from 'vue';
import { getEmbalses } from '@/composables/getEmbalses';

const embalses = ref([]);

onMounted(async () => {
    //Obtenemos los datos de la API y almacenamos en usuarios
    const data = await getEmbalses();
    // Filtramos por nombre de embalse para que no se repitan
    const uniqueEmbalses = data.filter((embalse, index, self) =>
        index === self.findIndex((e) => e.estaci === embalse.estaci)
    );
    embalses.value = uniqueEmbalses;
    console.log(embalses.value);
});
</script>


<template>
    <h1>Embalses Cataluña</h1>
    <div v-for="(embalse, index) in embalses" :key="index">
        <!-- <p>{{ embalse.estaci }}</p> -->
        <router-link to=""></router-link>

    </div>
</template>