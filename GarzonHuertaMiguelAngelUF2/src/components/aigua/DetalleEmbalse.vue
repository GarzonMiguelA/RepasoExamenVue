<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getEmbalses } from '@/composables/getEmbalses.js';

const route = useRouter();

const embalseDetails = ref({});

//Llamamos a la API cuando el componente se monta
onMounted(async () => {
  const data = await getEmbalses();
  const embalse = data.find((item) => item.estaci === route.params.estaci);
  embalseDetails.value = embalse; 
});


</script>

<template>
    <div v-if="embalseDetails.estaci">
        <h2>Detalles del embalse: {{ embalseDetails.estaci }}</h2>
        <p><strong>Día:</strong> {{ embalseDetails.dia }}</p>
        <p><strong>Nivel absoluto:</strong> {{ embalseDetails.nivell_absolut }} m</p>
        <p><strong>Porcentaje volumen embalsado:</strong> {{ embalseDetails.percentatge_volum_embassat }} %</p>
        <p><strong>Volumen embalsado:</strong> {{ embalseDetails.volum_embassat }} hm³</p>    
    </div>
    <div v-else>
        <p>No se encontró el embalse.</p>
    </div>
</template>
