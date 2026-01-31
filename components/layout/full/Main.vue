<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import resume from "@/assets/pdf/CV Nonthachai.pdf";

import "animate.css";

const { t } = useI18n();
const drawer = ref(false);

const navbar_items = computed(() => [
  { text: t("home.text"), href: "#home-page", icon: "mdi-home" },
  { text: t("skills.text"), href: "#skill-page", icon: "mdi-lightbulb" },
  { text: t("project.text"), href: "#project-page", icon: "mdi-briefcase" },
  { text: t("aboutme.title"), href: "#aboutme-page", icon: "mdi-email" },
]);

const fullText = "Nonthachai's Portfolio";
const Text = "Portfolio";
const displayText = ref("");
let index = 0;
let deleting = false;

onMounted(() => {
  setInterval(() => {
    if (!deleting) {
      displayText.value = fullText.substring(0, index);
      index++;
      if (index > fullText.length) {
        deleting = true;
        index = fullText.length;
      }
    } else {
      displayText.value = fullText.substring(0, index);
      index--;
      if (index === 0) {
        deleting = false;
      }
    }
  }, 200);
});
</script>

<template>
  <!-- App Bar (Fixed Navbar) -->
  <v-app-bar
    app
    fixed
    elevation="4"
    density="comfortable"
    class="custom-app-bar"
  >
    <v-row
      align="center"
      style="width: 100%"
      justify="space-between"
      class="px-8"
    >
      <v-responsive class="d-flex align-center">
        <!-- สำหรับหน้าจอขนาดกลางขึ้นไป -->
        <div
          class="inline-flex items-center whitespace-nowrap text-[24px] font-bold font-mono d-none d-md-inline d-sm-inline"
        >
          <strong
            class="inline-block kanit-medium text-h6 text-md-body-1 text-lg-h6"
          >
            {{ fullText }}
          </strong>
          <span class="inline-block w-[10px] text-center animate-blink">|</span>
        </div>

        <!-- สำหรับหน้าจอขนาดเล็กกว่า md -->
        <div
          class="inline-flex items-center whitespace-nowrap text-[24px] font-bold font-mono d-inline d-md-none d-sm-none"
        >
          <strong
            class="inline-block kanit-medium text-h6 text-md-body-1 text-lg-h6"
          >
            {{ Text }}
          </strong>
          <span class="inline-block w-[10px] text-center animate-blink">|</span>
        </div>
      </v-responsive>

      <!-- Navbar สำหรับ Desktop -->
      <div class="d-none d-md-flex">
        <v-btn
          v-for="(item, index) in navbar_items"
          :key="index"
          :prepend-icon="item.icon"
          :to="item.href"
          variant="plain"
          class="mx-2"
        >
          <strong>{{ item.text }}</strong>
        </v-btn>
      </div>

      <!-- Resume BTN  สำหรับ Desktop -->
      <div class="d-none d-sm-flex">
        <v-btn
          prepend-icon="mdi-file"
          :href="resume"
          target="_blank"
          variant="plain"
          class="mx-2"
        >
          <strong>{{ t("aboutme.resume") }}</strong>
        </v-btn>
      </div>

      <div class="d-flex align-center">
        <LayoutFullVerticalHeaderLanguageSwitcher />
      </div>
      <!-- Hamburger Menu (เฉพาะมือถือ) -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-row>
  </v-app-bar>
  <!-- Sidebar สำหรับมือถือ -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item
        v-for="(item, index) in navbar_items"
        :key="index"
        :href="item.href"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item :href="resume" target="_blank">
        <template v-slot:prepend>
          <v-icon>mdi-file</v-icon>
        </template>
        <v-list-item-title>{{ t("aboutme.resume") }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
