<script setup lang="ts">
const title = ref("Portfolio's Nonthachai");

useHead({
  meta: [{ content: title }],
  titleTemplate: () => {
    return "Portfolio's Nonthachai";
  },
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
});
</script>

<template>
  <v-locale-provider>
    <v-app>
      <LayoutFullMain />
      <v-main>
        <v-container fluid class="pa-0">
          <NuxtPage />
        </v-container>
      </v-main>
      <FooterFullMain />
    </v-app>
  </v-locale-provider>
</template>
