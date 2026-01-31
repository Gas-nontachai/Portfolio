<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer class="bg-[#0b1120] text-[#cbd5f5] pt-6 pb-8">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <span>{{ t("footer.copyright") }}</span>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
