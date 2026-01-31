<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import cv from "@/assets/pdf/CV Nonthachai.pdf";

import "animate.css";

const { t } = useI18n();
const drawer = ref(false);

const navbar_items = computed(() => [
  { text: t("home.text"), href: "#home-page", icon: "mdi-home" },
  { text: t("skills.text"), href: "#skill-page", icon: "mdi-lightbulb" },
  { text: t("project.text"), href: "#project-page", icon: "mdi-briefcase" },
  { text: t("aboutme.title"), href: "#aboutme-page", icon: "mdi-email" },
]);

const brand = computed(() => `${t("name")}`);
</script>

<template>
  <v-app-bar
    app
    fixed
    elevation="0"
    height="84"
    density="comfortable"
    class="custom-app-bar !bg-white/70 backdrop-blur border-b border-black/10"
  >
    <v-container class="max-w-[1200px] mx-auto px-2">
      <v-row align="center" justify="space-between" class="py-2">
        <div class="flex items-center gap-3">
        
          <div class="hidden sm:block">
            <div class="display text-[1.05rem] leading-tight text-slate-900">
              {{ brand }}
            </div>
            <div
              class="text-[0.72rem] uppercase tracking-[0.35em] text-slate-500"
            >
              Portfolio
            </div>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <v-btn
            v-for="(item, index) in navbar_items"
            :key="index"
            :to="item.href"
            variant="text"
            class="!text-slate-700 hover:!text-slate-950"
          >
            <span class="text-[0.95rem] font-medium">{{ item.text }}</span>
          </v-btn>
        </div>

        <div class="hidden sm:flex items-center gap-3">
          <v-btn
            prepend-icon="mdi-file"
            :href="cv"
            target="_blank"
            color="black"
            variant="flat"
            rounded="lg"
          >
            {{ t("aboutme.cv") }}
          </v-btn>
          <LayoutFullVerticalHeaderLanguageSwitcher />
        </div>

        <div class="flex items-center gap-2 sm:hidden">
          <LayoutFullVerticalHeaderLanguageSwitcher />
          <v-app-bar-nav-icon @click="drawer = !drawer" />
        </div>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list class="py-4">
      <v-list-item
        v-for="(item, index) in navbar_items"
        :key="index"
        :href="item.href"
      >
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title class="font-medium">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
      <v-divider class="my-3"></v-divider>
      <v-list-item :href="cv" target="_blank">
        <template #prepend>
          <v-icon>mdi-file</v-icon>
        </template>
        <v-list-item-title class="font-medium">
          {{ t("aboutme.cv") }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
