<script setup>
import { ref, onMounted } from 'vue';
import ListadoEjercicios from '@/components/menu/ListadoEjercicios.vue';
import { getEmbalses } from '@/composables/getEmbalses.js';

const embalses = ref([]);

// Llamada a la API cuando el componente se monta
onMounted(async () => {
  const data = await getEmbalses();
  const uniqueEmbalses = data.filter((item, index, self) =>
    index === self.findIndex((t) => t.estaci === item.estaci)
  );
  embalses.value = uniqueEmbalses;
});
</script>

<template>
  <ListadoEjercicios></ListadoEjercicios>

  <h2>Listado de embalses de les Conques internes de Catalunya</h2>

  <table border="1">
    <thead>
      <tr>
        <th>Nombre del embalse</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in embalses" :key="index">
        <td>
          <RouterLink :to="{
            name: 'embalse',
            params: { estaci: encodeURIComponent(item.estaci) }
          }">
            {{ item.estaci }}
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>

  <router-view></router-view>
</template>
