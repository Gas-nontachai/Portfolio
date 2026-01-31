<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <v-row>
      <v-col cols="8" class="mx-15">
        <div class="container">
          <div class="footer-left">
            <span>{{ t("footer.copyright") }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>
