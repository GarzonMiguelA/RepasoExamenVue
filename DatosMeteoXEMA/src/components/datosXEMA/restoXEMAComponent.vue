<script setup>
// Asegúrate de definir las props correctamente
const props = defineProps({
  id: {
    type: String, // O el tipo que prefieras, dependiendo de cómo se pasa el 'id'
    required: true
  }
});

// Usa el id para hacer lo que necesites
console.log(props.id);
</script>



<template>
    <h2>Resto de codigo</h2>
    <router-view></router-view>
</template>