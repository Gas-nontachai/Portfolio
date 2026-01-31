<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer class="bg-[#0b1020] text-[#cbd5f5] pt-8 pb-10">
    <v-container class="max-w-[1200px] mx-auto">
      <v-row class="items-center" justify="space-between">
        <v-col cols="12" md="6">
          <div class="display text-[1.1rem] text-white">{{ t("name") }}</div>
          <div class="mt-2 text-sm text-slate-300">
            {{ t("footer.copyright") }}
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-start md:text-end">
          <div class="text-xs uppercase tracking-[0.35em] text-slate-400">
            Portfolio
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
