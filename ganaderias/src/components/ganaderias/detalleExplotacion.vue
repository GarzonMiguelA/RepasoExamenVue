<script setup>
import {getGanaderias} from '@/composables/getGanaderias'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const props = defineProps(['nom_explotaci_']);

const ganaderias = ref([]);

const conseguirGanaderias = async (nom_explotaci_) => {
    const data = await getGanaderias(nom_explotaci_);
    ganaderias.value = data;
}

onMounted(() => {
    conseguirGanaderias(props.nom_explotaci_);
});

const volver = () => {
    router.push('/ganaderias');
}
</script>


<template>
    <h1>Detalles Ganaderias</h1>
    <button @click="volver">Volver</button>

    <div v-for="(ganaderia, index) in ganaderias" :key="index">
        <p><span>Marca oficial:</span> {{ ganaderia.marca_oficial }}</p>
        <p><span>Codi rega:</span> {{ ganaderia.codi_rega }}</p>
        <p><span>Estado explotación:</span> {{ ganaderia.estat_explotaci_ }}</p>
        <p><span>Fecha cambio estado:</span> {{ ganaderia.data_canvi_estat_explotaci_ }}</p>
        <p><span>Nombre explotación:</span> {{ ganaderia.nom_explotaci }}</p>
        <p><span>Dirección:</span> {{ ganaderia.adre_a_explotaci }}</p>
        <p><span>Código postal:</span> {{ ganaderia.cp }}</p>
        <p><span>Comarca:</span> {{ ganaderia.comarca }}</p>
        <p><span>Municipio:</span> {{ ganaderia.municipi }}</p>
        <p><span>Coordenadas X:</span> {{ ganaderia.coor_x }}</p>
        <p><span>Coordenadas Y:</span> {{ ganaderia.coor_y }}</p>
        <p><span>Latitud:</span> {{ ganaderia.latitud }}</p>
        <p><span>Longitud:</span> {{ ganaderia.longitud }}</p>
        <p><span>Tipo explotación:</span> {{ ganaderia.tipus_explotaci }}</p>
        <p><span>Especie:</span> {{ ganaderia.esp_cie }}</p>
        <p><span>Subespecie:</span> {{ ganaderia.subesp_cie }}</p>
        <p><span>Clasificación zootécnica:</span> {{ ganaderia.classificaci_zoot_cnica }}</p>
        <p><span>Capacidad productiva:</span> {{ ganaderia.capacitat_productiva }}</p>
        <p><span>Total UB:</span> {{ ganaderia.total_ub }}</p>
        <p><span>Total nitrógeno:</span> {{ ganaderia.total_nitrogen }}</p>
        <p>-------------------------</p>
    </div>
</template>