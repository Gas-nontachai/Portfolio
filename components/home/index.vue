<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import "animate.css";
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="text-center d-flex justify-center" cols="12" md="4">
        <img
          src="../../assets/img/nonthachai.jpg"
          alt="Nonthachai"
          class="animate__animated animate__fadeInDown"
          style="
            border-radius: 50%;
            width: 200px;
            height: 200px;
            object-fit: cover;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          "
        />
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
  img {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: large;
  }
}
</style>
