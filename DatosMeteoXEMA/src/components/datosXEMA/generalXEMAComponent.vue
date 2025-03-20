<script setup>
import { getXema } from '@/composables/getXema';
import { onMounted,ref } from 'vue';

const datos = ref([]);

onMounted(async () => {
    const data = await getXema();

    const datosFiltrados = data.filter((item, index, self) =>
        index === self.findIndex((t) => t.id === item.id)
    );

    datos.value = datosFiltrados
    console.log(datosFiltrados);
});



</script>


<template>
    <div>
        <h1>Datos Meteorologicos</h1>
    </div>

    <!-- Mostramos toda la lista de usuarios con una tabla basandonos en la peticion axios recogida -->
    <table>
        <thead>
            <tr>
                <th>Codigo estacion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato, index) in datos" :key="index">
                <td>
                    <RouterLink :to="`/datosMeteorologicos/${dato.id}`">{{ dato.id }}</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>

    <router-view></router-view>
</template>