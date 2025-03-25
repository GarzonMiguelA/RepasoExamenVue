<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const { componentes } = defineProps(['componentes']);
const emit = defineEmits(['eliminar']); // Define el evento 'eliminar'

// Lógica para hacer la suma total de los precios de los componentes:
const sumaTotal = computed(() => {
    return componentes.reduce((total, componente) => total + (componente.precio * componente.cantidad), 0);
});

// Emitimos un evento para eliminar un componente
const eliminarComponente = (index) => {
    emit('eliminar', index); // Emitimos el índice del componente a eliminar
};
</script>

<template>
    <h1>Listado Componentes</h1>
    <!-- Mostramos los componentes: -->
    <ul>
        <li v-for="(componente, index) in componentes" :key="componente.nombre">
            <p>Nombre: {{ componente.nombre }}</p>
            <p>Cantidad: {{ componente.cantidad }}</p>
            <p>Precio: {{ componente.precio }}</p>
            <button @click.prevent="eliminarComponente(index)">Eliminar</button>
        </li>
    </ul>
    <p>Suma total de precios: {{ sumaTotal }}</p>
</template>