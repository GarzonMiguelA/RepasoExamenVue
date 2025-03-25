<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="menu-container">
        <h1>Examen UF2</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Covid">Covid</RouterLink>
        </nav>
    </header>
</template>