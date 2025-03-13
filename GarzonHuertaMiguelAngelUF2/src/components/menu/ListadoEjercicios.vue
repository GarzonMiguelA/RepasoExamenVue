<script setup>
</script>


<template>
    <h3>Examen UF2</h3>

    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/aigua">Aigua</RouterLink>
        <RouterLink to="/compra">ListaCompra</RouterLink>
    </nav>

    
</template>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>