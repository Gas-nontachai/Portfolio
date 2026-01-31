<script setup lang="ts">
import profileImg from "@/assets/img/nontachai.jpg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import "animate.css";
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="text-center d-flex justify-center" cols="12" md="4">
        <v-avatar size="300" class="animate__animated animate__fadeInDown"
          style="box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
          <v-img :src="profileImg" alt="Nonthachai" cover />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8" class="text-center">
        <p class="mt-10 kanit-extrabold" style="font-size: xx-large">
          {{ t("name") }}
        </p>
        <span class="mx-3 animate__animated animate__fadeInRight">{{
          t("home.description")
          }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@media (max-width: 600px) {
  p {
    font-size: large;
  }
}
</style>
