<script setup lang="ts"> 

const title = ref("GGas");

useHead({
  meta: [{ content: title }],
  titleTemplate: () => {
    return "GGas login";
  },
});
</script>
<template>
  <v-app>
    <NuxtPage />
  </v-app>
</template>