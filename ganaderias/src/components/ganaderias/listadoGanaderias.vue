<script setup>
import { ref, onMounted } from 'vue';
import {getGanaderias} from '@/composables/getGanaderias'

const ganaderias = ref([])
const numeroTotal = 0
onMounted(async () => {
    const data = await getGanaderias();
    
    const filtroGanaderias = data.filter((ganaderia, index, self) =>
       index === self.findIndex((g) => g.nom_explotaci === ganaderia.nom_explotaci)
    );
    ganaderias.value = filtroGanaderias;
    
});


</script>

<template>
    <h1>Listado Ganaderias catalanas</h1>
    <div v-for="(ganaderia, index) in ganaderias" :key="index">
      <router-link :to="`/ganaderias/${ganaderia.nom_explotaci_}`"> {{ ganaderia.nom_explotaci }}</router-link>
    </div>        
</template>