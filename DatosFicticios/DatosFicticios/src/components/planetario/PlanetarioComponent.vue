<script setup>
import ListadoEjerciciosView from '@/views/ListadoEjerciciosView.vue';
import { onMounted, ref } from 'vue';
import { getPlanetario } from '@/composables/getPlanetario';

const datos = ref([]);

onMounted(async () => {
    const data = await getPlanetario();
    datos.value = data;
    console.log(data);
})
</script>


<template>
    <ListadoEjerciciosView></ListadoEjerciciosView>

    <div>
        <h1>Planetario diario</h1>
    </div>

    <div>
        <h2>{{ datos.title }}</h2>
        <p>Registro del dia: {{ datos.date }}</p>
        <p>Descripcion: {{ datos.explanation }}</p>
        <img :src="datos.hdurl" alt="Imagen del planetario" class="imagen">
    </div>


    
    
    <!-- Aqui renderizamos la vista del user al hacer clic en cada uno de ellos, es decir permitimos que se vea el detalle -->
    <router-view></router-view>
</template>

<style>
.imagen{
    width: 30%;
    height: 30%;
}
</style>