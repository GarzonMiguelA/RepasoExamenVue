<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getEmbalses } from '@/composables/getEmbalses.js'; // Añade la importación

const route = useRoute();
const embalseDetails = ref({});

onMounted(async () => {
  const data = await getEmbalses();
  const estaciDecoded = decodeURIComponent(route.params.estaci); // Decodifica el parámetro
  
  const embalse = data.find(item => item.estaci === estaciDecoded);
  
  if (embalse) {
    embalseDetails.value = embalse;
  }
});
</script>

<template>
  <div v-if="embalseDetails">
    <h2>Detalles del embalse: {{ embalseDetails.estaci }}</h2>
    <p><strong>Día:</strong> {{ embalseDetails.dia }}</p>
    <p><strong>Nivel absoluto:</strong> {{ embalseDetails.nivell_absolut }} m</p>
    <p><strong>Porcentaje volumen embalsado:</strong> {{ embalseDetails.percentatge_volum_embassat }} %</p>
    <p><strong>Volumen embalsado:</strong> {{ embalseDetails.volum_embassat }} hm³</p>    
  </div>
</template>
