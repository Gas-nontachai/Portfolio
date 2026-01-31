<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <span>{{ t("footer.copyright") }}</span>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  background: #0b1120;
  color: #cbd5f5;
  padding: 24px 0 32px;
}
</style>
