<script setup>
import ListadoEjercicios from '@/components/menu/ListadoEjercicios.vue';

import { ref } from 'vue';  
const listaCompra = ref([]);
const producto = ref('');

const addProducto = () => {
    listaCompra.value.push({ nombre: producto.value, prioritario: false, comprado: false });
    producto.value = '';
}



</script>

<template>
    <ListadoEjercicios></ListadoEjercicios>

    <h2>Lista de la compra</h2>
    <input type="text" v-model="producto" @keyup.enter="addProducto">
    <button @click="addProducto">Añadir</button>
    <ul>
        <li v-for="(item, index) in listaCompra" :key="index" :class="{ prioritario: item.prioritario, comprado: item.comprado }">
            {{ item.nombre }}
            <input type="checkbox" v-model="item.prioritario"> Prioritario
            <input type="checkbox" v-model="item.comprado"> Comprado
        </li> 
    </ul>
</template>


<style>
.prioritario {
    color: green;
}

.comprado {
    color: red;
    text-decoration: line-through;
}
</style>