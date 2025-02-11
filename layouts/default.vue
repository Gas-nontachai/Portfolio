<script setup lang="ts">

const title = ref("Portfolio's Nontachai");

useHead({
  meta: [{ content: title }],
  titleTemplate: () => {
    return "Portfolio's Nontachai";
  },
  link: [
    { rel: 'icon', href: '@/assets/images/logo/portfolio.png' }
  ]
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