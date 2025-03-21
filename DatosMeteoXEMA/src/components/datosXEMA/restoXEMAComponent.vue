<script setup>
import { ref, onMounted, watch } from 'vue';
import { getXema } from '@/composables/getXema';

// Asegúrate de definir las props correctamente
const props = defineProps(['id']);

const datosXEMA = ref([]);

const fetchDatos = async () => {
    const data = await getXema();

    datosXEMA.value = data.find(dato => dato.id === props.id);
};

// Cargar el usuario al montar el componente
onMounted(() => {
    fetchDatos(props.id);
});

// Observamos cambios en props.id y actualizamos el usuario
watch(() => props.id, (newId) => {
    fetchDatos(newId);
});
// Usa el id para hacer lo que necesites
console.log(props.id);
</script>



<template>

    <button>
      <router-link to="/datosMeteorologicos">Volver</router-link>
    </button>

    <h2>Resto de codigo</h2>
    <div>
      <p>Estas en la estacion: {{ datosXEMA.id }}</p>
      <p>Codigo de la estacion: {{datosXEMA.codi_estacio}}</p>
      <p>Codigo variable de la estacion: {{ datosXEMA.codi_variable }}</p>
      <p>Fecha de lectura: {{ datosXEMA.data_lectura }}</p>
      <p>Valor de lectura: {{ datosXEMA.valor_lectura }}</p>
      <p>Codigo del estado: {{ datosXEMA.codi_estat }}</p>
      <p>Codigo de la base: {{ datosXEMA.codi_base }}</p>
    </div>

    
</template>