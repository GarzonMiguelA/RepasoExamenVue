<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="menu-container">
        <h1>Examen UF2</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/aigua">Aigua</RouterLink>
            <RouterLink to="/compra">LlistaCompra</RouterLink>
            <RouterLink to="/registroUsers">Registro Usuarios</RouterLink>
            <RouterLink to="/calculadoraNotas">Calculadora de Notas</RouterLink>
            <RouterLink to="/inventario">Inventario</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
    border-bottom: 2px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-container h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
}

nav {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}

nav a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #0056b3;
    text-decoration: underline;
}
</style>