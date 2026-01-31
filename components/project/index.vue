<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Project {
  title: string;
  description: string;
  detail: string;
  img: string[];
  git?: string;
  git_fe?: string;
  git_be?: string;
}

const projects = computed<Project[]>(() => [
  {
    title: t("project.projectOne.title"),
    description: t("project.projectOne.description"),
    detail: t("project.projectOne.detail"),
    git: "https://github.com/Gas-nonthachai/Final-Project",
    img: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
  },
  {
    title: t("project.projectTwo.title"),
    description: t("project.projectTwo.description"),
    detail: t("project.projectTwo.detail"),
    img: ["7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"],
  },
  {
    title: t("project.projectThree.title"),
    description: t("project.projectThree.description"),
    detail: t("project.projectThree.detail"),
    git_fe: "https://github.com/Gas-nonthachai/8BuildIn_frontend/",
    git_be: "https://github.com/Gas-nonthachai/8BuildIn_backend",
    img: [
      "pj3 (1).png",
      "pj3 (2).png",
      "pj3 (3).png",
      "pj3 (4).png",
      "pj3 (5).png",
      "pj3 (6).png",
      "pj3 (7).png",
      "pj3 (8).png",
      "pj3 (9).png",
    ],
  },
  {
    title: t("project.projectFour.title"),
    description: t("project.projectFour.description"),
    detail: t("project.projectFour.detail"),
    git_fe: "https://github.com/Gas-nonthachai/ggas_stock_frontend/tree/dev",
    git_be: "https://github.com/Gas-nonthachai/ggas_stock_backend/tree/dev",
    img: [
      "pj4 (1).png",
      "pj4 (2).png",
      "pj4 (3).png",
      "pj4 (4).png",
      "pj4 (5).png",
      "pj4 (6).png",
      "pj4 (7).png",
      "pj4 (8).png",
      "pj4 (9).png",
      "pj4 (10).png",
      "pj4 (11).png",
      "pj4 (12).png",
    ],
  },
]);

const dialog_img = ref(false);
const current_img = ref<string[]>([]);
const startIndex = ref(0);

const toggleFullImg = (images: string[], index = 0) => {
  current_img.value = images;
  startIndex.value = index;
  dialog_img.value = true;
};

const getImageUrl = (imagename: string) => {
  return `/project/${imagename}`;
};
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto px-4 py-8">
    <v-row class="mb-8">
      <v-col cols="12" md="7">
        <h2 class="text-[clamp(2.1rem,3.2vw,3.1rem)] font-bold text-slate-900">
          {{ t("project.title") }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="6"
        class="d-flex"
      >
        <v-card
          class="rounded-[28px] overflow-hidden bg-white border border-black/10 d-flex flex-column w-full hover:shadow-xl transition-shadow duration-300"
          elevation="2"
        >
          <!-- Image Section -->
          <div
            class="relative cursor-pointer overflow-hidden"
            @click.stop="toggleFullImg(project.img)"
          >
            <v-img
              :src="getImageUrl(project.img[0])"
              height="280"
              cover
              class="transition-transform duration-300 hover:scale-105"
            >
            </v-img>

            <!-- Overlay View Button -->
            <div class="absolute top-4 right-4">
              <v-btn
                size="small"
                variant="elevated"
                color="white"
                class="!text-slate-700"
                @click.stop="toggleFullImg(project.img)"
              >
                <v-icon start>mdi-eye</v-icon>
                {{ t("project.view") }}
              </v-btn>
            </div>
          </div>

          <!-- Content Section -->
          <v-card-text class="p-6 flex-grow d-flex flex-column">
            <!-- Title -->
            <h3 class="text-[1.5rem] font-bold text-slate-900 mb-3">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-slate-600 text-[0.95rem] leading-relaxed mb-4">
              {{ project.description }}
            </p>

            <!-- Detail Info -->
            <div class="flex items-start gap-2 text-slate-700 mb-6">
              <v-icon size="20" color="primary" class="mt-0.5">
                mdi-information-outline
              </v-icon>
              <span class="text-[0.9rem] leading-relaxed">
                {{ project.detail }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="mt-auto flex flex-wrap gap-2">
              <v-btn
                color="primary"
                rounded="lg"
                variant="elevated"
                size="default"
                @click.stop="toggleFullImg(project.img)"
              >
                <v-icon start>mdi-eye</v-icon>
                {{ t("project.view") }}
              </v-btn>

              <v-btn
                v-if="project.git"
                :href="project.git"
                target="_blank"
                variant="tonal"
                color="grey-darken-1"
                rounded="lg"
                size="default"
                @click.stop
              >
                <v-icon start>mdi-github</v-icon>
                GitHub
              </v-btn>

              <v-btn
                v-if="project.git_fe"
                :href="project.git_fe"
                target="_blank"
                variant="outlined"
                color="primary"
                rounded="lg"
                size="default"
                @click.stop
              >
                <v-icon start>mdi-github</v-icon>
                Frontend
              </v-btn>

              <v-btn
                v-if="project.git_be"
                :href="project.git_be"
                target="_blank"
                variant="outlined"
                color="primary"
                rounded="lg"
                size="default"
                @click.stop
              >
                <v-icon start>mdi-server</v-icon>
                Backend
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Image Carousel Dialog -->
  <v-dialog v-model="dialog_img" max-width="95%" max-height="95vh">
    <v-card class="position-relative">
      <v-btn
        icon="mdi-close"
        @click="dialog_img = false"
        class="position-absolute top-0 right-0 ma-2 z-10"
        color="white"
        size="large"
        elevation="2"
      />

      <v-carousel
        v-model="startIndex"
        show-arrows="hover"
        hide-delimiters
        height="85vh"
        class="rounded-lg"
      >
        <v-carousel-item
          v-for="(img, index) in current_img"
          :key="index"
          :src="getImageUrl(img)"
          cover
        />
      </v-carousel>
    </v-card>
  </v-dialog>
</template>
