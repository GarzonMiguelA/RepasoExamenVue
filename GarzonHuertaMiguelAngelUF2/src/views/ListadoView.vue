<script setup>
import ListadoEjercicios from '@/components/menu/ListadoEjercicios.vue';
import { RouterView } from 'vue-router';
</script>


<template>
   <div>
        <ListadoEjercicios/>
        <RouterView/>
    </div>
</template>