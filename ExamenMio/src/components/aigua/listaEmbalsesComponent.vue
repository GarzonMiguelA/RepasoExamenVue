<script setup>
import { ref, onMounted } from 'vue';
import { getEmbalses } from '@/composables/getEmbalses';

const embalses = ref([]);

onMounted(async () => {
    // Obtenemos los datos de la API y almacenamos en usuarios
    const data = await getEmbalses();
    // Filtramos por nombre de embalse para que no se repitan
    const uniqueEmbalses = data.filter((embalse, index, self) =>
        index === self.findIndex((e) => e.estaci === embalse.estaci)
    );
    embalses.value = uniqueEmbalses;

});
</script>

<template>
    <div class="embalses-container">
        <h1>Embalses Cataluña</h1>
        <div v-for="(embalse, index) in embalses" :key="index" class="embalse-item">
            <router-link :to="`/aigua/${embalse.estaci}`">{{ embalse.estaci }}</router-link>
        </div>
    </div>
</template>

<style scoped>
.embalses-container {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.embalses-container h1 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
}

.embalse-item {
    margin: 0.5rem 0;
}

.embalse-item a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;
}

.embalse-item a:hover {
    color: #0056b3;
    text-decoration: underline;
}
</style>