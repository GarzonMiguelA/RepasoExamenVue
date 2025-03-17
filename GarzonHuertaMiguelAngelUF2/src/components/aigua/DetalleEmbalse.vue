<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getEmbalses } from '@/composables/getEmbalses.js';

const route = useRoute();
const embalseDetails = ref([]);

const fetchEmbalseDetails = async () => {
  const data = await getEmbalses();
  const estaciDecoded = decodeURIComponent(route.params.estaci);

  const embalse = data.filter(item => item.estaci === estaciDecoded);

  embalse.sort((a, b) => new Date(b.dia) - new Date(a.dia));

  embalseDetails.value = embalse;
};

onMounted(fetchEmbalseDetails);
watch(() => route.params.estaci, fetchEmbalseDetails);
</script>

<template>
  <div v-if="embalseDetails.length">
    <h1>Detalles del embalse: {{ embalseDetails[0].estaci }}</h1>
    <div v-for="embalse in embalseDetails" :key="embalse.dia">
      <p><strong>Día:</strong> {{ embalse.dia }}</p>
      <p><strong>Nivel absoluto:</strong> {{ embalse.nivell_absolut }} m</p>
      <p><strong>Porcentaje volumen embalsado:</strong> {{ embalse.percentatge_volum_embassat }} %</p>
      <p><strong>Volumen embalsado:</strong> {{ embalse.volum_embassat }} hm³</p>
      <hr />
    </div>
  </div>
</template>
