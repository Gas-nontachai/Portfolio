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

/* ---------- Image Dialog ---------- */
const dialog_img = ref(false);
const current_img = ref<string[]>([]);
const startIndex = ref(0);

const toggleFullImg = (images: string[], index = 0) => {
  current_img.value = images;
  startIndex.value = index;
  dialog_img.value = true;
};

/* ---------- Helpers ---------- */
const getImageUrl = (imagename: string) => {
  return `/project/${imagename}`;
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-title class="text-center text-primary text-h4">
          <strong class="kanit-medium">{{ t("project.text") }}</strong>
        </v-card-title>
        <h2 class="text-h5">
          <strong class="kanit-medium">{{ t("project.title") }}</strong>
        </h2>
      </v-col>
    </v-row>

    <v-row align="stretch" class="d-flex justify-start">
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="6"
        lg="6"
        class="mb-5"
      >
        <v-card
          class="d-flex flex-column h-100 pa-4 bg-surface text-on-surface"
          elevation="10"
          style="border-radius: 20px"
        >
          <v-card-title class="kanit-medium font-weight-bold mb-2">
            {{ project.title }}
          </v-card-title>

          <v-card-text class="flex-grow-1 mb-2">
            <span class="kanit">{{ project.description }}</span>
          </v-card-text>

          <v-card-text class="kanit-thin mb-3 mx-1">
            <v-icon start color="primary">mdi-information-outline</v-icon>
            <span style="font-size: 0.95rem">{{ project.detail }}</span>
          </v-card-text>

          <!-- Carousel (desktop) -->
          <v-carousel
            v-if="project.img?.length"
            show-arrows="hover"
            hide-delimiters
            class="d-none d-sm-block rounded-lg elevation-3"
            interval="3000"
            cycle
            height="240"
          >
            <v-carousel-item
              v-for="(img, index) in project.img"
              :key="index"
              :src="getImageUrl(img)"
              class="cursor-pointer"
              @click="toggleFullImg(project.img, index)"
            />
          </v-carousel>

          <!-- GitHub Buttons (desktop) -->
          <v-card-actions class="d-none d-sm-flex justify-end mt-3 flex-wrap gap-2">
            <v-btn
              v-if="project.git"
              :href="project.git"
              target="_blank"
              color="primary"
              variant="elevated"
              rounded
            >
              <v-icon start>mdi-github</v-icon>
              GitHub
            </v-btn>

            <v-btn
              v-if="project.git_fe"
              :href="project.git_fe"
              target="_blank"
              color="primary"
              variant="outlined"
              rounded
            >
              <v-icon start>mdi-github</v-icon>
              Frontend Source
            </v-btn>

            <v-btn
              v-if="project.git_be"
              :href="project.git_be"
              target="_blank"
              color="primary"
              variant="outlined"
              rounded
            >
              <v-icon start>mdi-server</v-icon>
              Backend Source
            </v-btn>
          </v-card-actions>

          <!-- Mobile -->
          <v-card-actions class="d-flex d-sm-none justify-center mt-3">
            <v-btn
              color="primary"
              rounded
              variant="outlined"
              @click="toggleFullImg(project.img)"
            >
              <v-icon start>mdi-eye</v-icon>
              {{ t("project.view") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Full Image Dialog -->
  <v-dialog v-model="dialog_img" max-width="80%">
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
