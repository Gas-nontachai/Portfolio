<script setup lang="ts">
import { useTheme } from "vuetify";
import { ref, watch } from "vue";

const theme = useTheme();
const storedTheme =
  typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
const normalizedTheme =
  storedTheme === "LightTheme"
    ? "light"
    : storedTheme === "DarkTheme"
      ? "dark"
      : storedTheme || "light";
const currentTheme = ref(normalizedTheme);

theme.global.name.value = currentTheme.value;

function toggleTheme() {
  currentTheme.value = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = currentTheme.value;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", currentTheme.value);
  }
}

watch(currentTheme, (newTheme) => {
  theme.global.name.value = newTheme;
});
</script>

<template>
  <v-btn @click="toggleTheme" color="primary" dark>
    <v-icon left>{{
      theme.global.current.value.dark
        ? "mdi-weather-night"
        : "mdi-weather-sunny"
    }}</v-icon>
  </v-btn>
</template>
