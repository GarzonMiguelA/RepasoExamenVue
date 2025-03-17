<script setup>
import { ref, onMounted } from 'vue';
import { getUsers } from '@/composables/getUsers';
import { defineProps } from 'vue';

const props = defineProps(['id']);

const company = ref({});

const fetchCompany = async (id) => {
  const users = await getUsers();
  const user = users.find(user => user.id === id);
  company.value = user.company; // Asegúrate de que 'company' es una propiedad válida
};

onMounted(() => {
  fetchCompany(props.id); // Usamos el id pasado a través de props
});
</script>

<template>
  <h1>Empresa del usuario:</h1>
  <p>Nombre de la empresa: {{ company.name }}</p>
  <p>Sitio Web: {{ company.catchPhrase }}</p>
  <p>Industria: {{ company.bs }}</p>
</template>
