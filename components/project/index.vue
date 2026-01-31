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
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <div class="text-[13px] tracking-[0.3em] uppercase text-slate-500">
          {{ t("project.text") }}
        </div>
        <h2
          class="text-[clamp(2rem,3vw,2.8rem)] mt-3 text-slate-900 kanit-medium"
        >
          {{ t("project.title") }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6">
        <v-card class="rounded-[24px] overflow-hidden bg-white" elevation="10">
          <v-img
            :src="getImageUrl(project.img[0])"
            height="220"
            cover
            class="relative"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.6),transparent_60%)]"
            ></div>
          </v-img>

          <v-card-text class="p-6">
            <h3 class="text-[1.4rem] mb-2 text-slate-900 kanit-medium">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 mb-4 kanit">{{ project.description }}</p>

            <div class="flex items-center gap-2 mb-5 text-slate-700">
              <v-icon size="18" color="primary">mdi-information-outline</v-icon>
              <span class="text-[0.95rem]">{{ project.detail }}</span>
            </div>

            <div
              class="flex items-center flex-wrap gap-2 mb-5"
              v-if="project.img?.length"
            >
              <v-btn
                variant="text"
                size="small"
                class="min-w-[auto] p-0"
                v-for="(img, index) in project.img.slice(0, 5)"
                :key="img"
                @click="toggleFullImg(project.img, index)"
              >
                <v-avatar
                  size="44"
                  class="border-2 border-white shadow-[0_4px_10px_rgba(15,23,42,0.2)]"
                >
                  <v-img :src="getImageUrl(img)" cover />
                </v-avatar>
              </v-btn>
              <div
                v-if="project.img.length > 5"
                class="text-[0.9rem] text-slate-500"
              >
                +{{ project.img.length - 5 }}
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <v-btn
                color="primary"
                rounded
                variant="elevated"
                @click="toggleFullImg(project.img)"
              >
                <v-icon start>mdi-eye</v-icon>
                {{ t("project.view") }}
              </v-btn>

              <v-btn
                v-if="project.git"
                :href="project.git"
                target="_blank"
                variant="tonal"
                rounded
              >
                <v-icon start>mdi-github</v-icon>
                GitHub
              </v-btn>

              <v-btn
                v-if="project.git_fe"
                :href="project.git_fe"
                target="_blank"
                variant="outlined"
                rounded
              >
                <v-icon start>mdi-github</v-icon>
                Frontend
              </v-btn>

              <v-btn
                v-if="project.git_be"
                :href="project.git_be"
                target="_blank"
                variant="outlined"
                rounded
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

  <v-dialog v-model="dialog_img" max-width="90%">
    <v-btn
      icon
      @click="dialog_img = false"
      class="ma-2"
      style="position: absolute; top: 0; right: 0; z-index: 10"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-carousel
      v-model="startIndex"
      show-arrows="hover"
      hide-delimiters
      height="80vh"
    >
      <v-carousel-item
        v-for="(img, index) in current_img"
        :key="index"
        :src="getImageUrl(img)"
        cover
      />
    </v-carousel>
  </v-dialog>
</template>
