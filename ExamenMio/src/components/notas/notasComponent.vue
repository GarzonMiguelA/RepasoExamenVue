<script setup>
import { ref } from 'vue';

const asignaturas = ref([]);
const nombreAsig = ref('');
const notaAsig = ref('');

const añadirAsignatura = () => {
    if (nombreAsig.value === '' || notaAsig.value === ''){
        alert('Por favor, completa todos los campos.');
        return;
    } 

    if (notaAsig.value < 0 || notaAsig.value > 10) {
        alert('La nota debe estar entre 0 y 10.');
        return;
    }

    asignaturas.value.push ({nombreAsig: nombreAsig.value, notaAsig:notaAsig.value})

    //Limpiamos input
    nombreAsig.value = '';
    notaAsig.value = '';
}
</script>



<template>
    <h1>Calculadora de notas</h1>
    <div>
        <input v-model="nombreAsig" type="text" placeholder="Asignatura" />
        <input v-model ="notaAsig" type="number" placeholder="Nota" />
        <button @click="añadirAsignatura">Añadir asignatura</button>
    </div>

    <h2>Asignaturas añadidas</h2>
    <p>Rojo: asignatura suspendida || Verde: asignatura aprobada</p>
    <div v-for="(asignatura, index) in asignaturas" :key='index' :class="{aprobado: asignatura.notaAsig >=5, suspendida: asignatura.notaAsig < 5}">
        <span>Asignatura:</span>{{ asignatura.nombreAsig }}<br/>
        <span>Nota:</span>{{ asignatura.notaAsig }}
    </div>
</template>

<style scoped>
.aprobado{
    color: green;
}

.suspendida{
    color: red;
}
</style>