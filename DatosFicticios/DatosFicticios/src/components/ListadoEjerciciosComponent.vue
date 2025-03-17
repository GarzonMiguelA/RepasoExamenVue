<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Repaso Examen Vue 2</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/usuarios">Usuarios</RouterLink>
      <RouterLink to="/planetario">Planetario</RouterLink>
    </nav>
  </div>

  
</template>

<style scoped>
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>