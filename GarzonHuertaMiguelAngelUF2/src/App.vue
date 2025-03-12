<script setup>
import { RouterView } from 'vue-router'
import Home from './components/home/Home.vue';
import ListadoView from './views/ListadoView.vue';

</script>

<template>
  <header>

    <ListadoView></ListadoView>

    <Home></Home>

    
  </header>

  <RouterView />
</template>

