<script setup>
import { ref } from 'vue';

const listaCompra = ref([]);

const label = ref('');
const comprat = ref(false);
const altaPrioritat = ref(false);

const afegirProducte = () => {
    if (label.value.trim()) {
        listaCompra.value.unshift({
            id: Date.now(),  
            label: label.value,
            comprat: comprat.value,
            altaPrioritat: altaPrioritat.value,
        });

        label.value = '';
        comprat.value = false;
        altaPrioritat.value = false;
    }
};
</script>

<template>
    <h1>Lista de Compra</h1>

    <form @submit.prevent="afegirProducte">
        <label for="label">Producto:</label>
        <input type="text" id="label" v-model="label" placeholder="Nombre del producto" required />

        <label for="comprat">¿Comprado?</label>
        <input type="checkbox" id="comprat" v-model="comprat"/>

        <label for="altaPrioritat">¿Alta prioridad?</label>
        <input type="checkbox" id="altaPrioritat" v-model="altaPrioritat" />

        <button type="submit">Añadir Producto</button>
    </form>

    <ul>
        <li 
            v-for="(item, index) in listaCompra" :key="item.id" :style="{ color: item.altaPrioritat && !item.comprat ? 'red' : (item.comprat ? 'green' : 'black'), textDecoration: item.comprat ? 'line-through' : 'none' }">
            {{ item.label }} 
        </li>
    </ul>
</template>

<style scoped>
form {
    margin-bottom: 20px;
}

input {
    margin: 5px;
}

button {
    margin-top: 10px;
    cursor: pointer;
}
</style>
