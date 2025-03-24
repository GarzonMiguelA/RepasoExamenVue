<script setup>
import { ref } from 'vue';

const productos = ref([]);

const añadirProductos = () => {
    const producto = document.getElementById('producto').value;
    if (producto) {
        productos.value.push({ nombre: producto, prioritario: false, comprado: false });
        document.getElementById('producto').value = ''; // Limpiar el input después de añadir
    }
};
</script>

<template>
    <h1>Lista Compra</h1>
    <div class="cardCompra">
        <input type="text" id="producto" placeholder="Escribe el producto" />
        <button @click="añadirProductos">Añadir Producto</button>
        <div v-for="(producto, index) in productos" :key="index" :class="{ prioritario: producto.prioritario, comprado: producto.comprado }">
            <p>{{ producto.nombre }}</p><label><input type="checkbox" v-model="producto.prioritario" /> Prioritario</label><label><input type="checkbox" v-model="producto.comprado" /> Comprado</label>
        </div>
    </div>
</template>

<style scoped>
.prioritario {
    color: red;
}

.comprado {
    color: green;
    text-decoration: line-through;
}
</style>