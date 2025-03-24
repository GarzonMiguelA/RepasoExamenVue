<script setup>
import { getEmbalses } from '@/composables/getEmbalses';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const props = defineProps(['estaci']);

const embalses = ref([]);

const conseguirEmbalses = async (estaci) => {
    const data = await getEmbalses(estaci);
    embalses.value = data;
}

onMounted(() => {
    conseguirEmbalses(props.estaci);
});

//Programamos funcion de volver de router .push:
const volver = () => {
    router.push('/aigua');
}

//calculamos capacidad total en (hm3)
const capacidadTotal = () => {
    return embalses.value.reduce((total, embalse) => {
        const volumen = parseInt(embalse.volum_embassat);
        return total + (isNaN(volumen) ? 0 : volumen);
    }, 0);
};



</script>


<template>
    <h1>Detalle Embalse</h1>

    <button @click="volver">Volver</button>
    <div v-if="embalses.length" class="cardEmbalse">
        <!-- Mostramos la capacidad total -->
        <h2>Capacidad total: {{ capacidadTotal() }} hm3</h2>

        <div v-for="(embalse,index) in embalses" :key="index">
            <p><span>Dia: {{ index + 1 }}</span> {{ embalse.dia }}</p>
            <p>Nivel absoluto del embalse: {{ embalse.nivell_absolut }}</p>
            <p>Porcentaje por volumen embasado: {{ embalse.percentatge_volum_embassat }}</p>
            <p>Volumen embasado: {{ embalse.volum_embassat }}</p>
            <br>
            <p>-------------------------------------------------</p>
            <br>
        </div>
    </div>

    <router-view></router-view>
</template>

<style scoped>
.cardEmbalse {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}
</style>