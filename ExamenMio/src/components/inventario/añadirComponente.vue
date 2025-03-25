<script setup>
import { ref } from 'vue';
import listaComponente from './listaComponente.vue';

const componentes = ref([]);

const nombre = ref('');
const cantidad = ref(0);
const precio = ref(0);

const añadirComponente = () => {
    componentes.value.push({
        nombre: nombre.value,
        cantidad: cantidad.value,
        precio: precio.value
    });
    nombre.value = '';
    cantidad.value = 0;
    precio.value = 0;
}

const eliminarComponentePadre = (index) => {
    componentes.value.splice(index, 1);  // Elimina el componente en la posición `index`
};
</script>

<template>
    <form>
        <label for="nombre">Nombre del producto</label>
        <input type="text" id="nombre" name="nombre" v-model="nombre">
        <label for="cantidad">Cantidad en stock</label>
        <input type="number" id="cantidad" name="cantidad" v-model="cantidad">
        <label for="precio">Precio por unidad</label>
        <input type="number" id="precio" name="precio" v-model="precio">
        <button @click.prevent="añadirComponente">Añadir</button>
    </form>

    <listaComponente :componentes="componentes" @eliminar="eliminarComponentePadre"></listaComponente>
</template>