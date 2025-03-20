<script setup>
import { ref, onMounted, watch } from 'vue';
import { getXema } from '@/composables/getXema';

// Asegúrate de definir las props correctamente
const props = defineProps(['id']);

const datosXEMA = ref(null);

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
    <div v-if="datosXEMA">
      <p>Estas en estacion {{ datosXEMA.id }}</p>
    </div>

    <div v-else>
      <p>Cargando...</p>

    </div>
    
</template>