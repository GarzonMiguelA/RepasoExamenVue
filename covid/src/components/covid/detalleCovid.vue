<script setup>
import { ref, onMounted } from 'vue';
import { getData } from '@/composable/getData';
import { useRouter } from 'vue-router';

const router = useRouter();
const casos = ref([]);

onMounted(async () =>{
    const data = await getData();

    casos.value=data
})

const volver = () => {
    router.push('/covid');
}
</script>



<template>
    <h1>Detalles:</h1>
    <button @click="volver">Volver</button>

    <div v-for="(caso, index) in casos" :key="index">
        <p><span>Registro Sanitario:</span> {{ caso.regiosanitariacodi }}</p>
        <p><span>Región Sanitaria:</span> {{ caso.regiosanitariadescripcio }}</p>
        <p><span>Código Sector Sanitario:</span> {{ caso.sectorsanitaricodi }}</p>
        <p><span>Descripción Sector Sanitario:</span> {{ caso.sectorsanitaridescripcio }}</p>
        <p><span>Código ABS:</span> {{ caso.abscodi }}</p>
        <p><span>Descripción ABS:</span> {{ caso.absdescripcio }}</p>
        <p><span>Código Sexo:</span> {{ caso.sexecodi }}</p>
        <p><span>Descripción Sexo:</span> {{ caso.sexedescripcio }}</p>
        <p><span>Resultado COVID:</span> {{ caso.resultatcoviddescripcio }}</p>
        <p><span>Número de Casos:</span> {{ caso.numcasos }}</p>
        <p>------------------------------------------------</p>
    </div>
</template>