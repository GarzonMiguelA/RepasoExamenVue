<script setup>
import { ref, onMounted } from 'vue';
import { getData } from '@/composable/getData';

const casos = ref([]);

onMounted(async () =>{
    const data = await getData();

    casos.value=data
})

</script>

<template>
    <h1>Covid</h1>
    <div v-for="(caso, index) in casos" :key="index">
        <router-link :to="`/covid/${caso.data}`">{{ caso.data }}</router-link>
    </div>
</template>