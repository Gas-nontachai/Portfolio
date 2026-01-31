<script setup lang="ts">
import profileImg from "@/assets/img/nontachai.jpg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import "animate.css";
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3" fluid>
    <v-row align="center" class="relative z-[1]">
      <v-col cols="12" md="7">
        <div
          class="text-[14px] tracking-[0.25em] uppercase text-slate-600 mb-4 max-[960px]:text-center"
        >
          {{ t("home.text") }}
        </div>
        <h1
          class="text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.1] text-slate-900 mb-4 m-0 kanit-extrabold max-[960px]:text-center"
        >
          {{ t("name") }}
        </h1>
        <p
          class="text-[1.1rem] text-slate-700 max-w-[560px] mb-7 kanit max-[960px]:text-center max-[960px]:mx-auto"
        >
          {{ t("home.description") }}
        </p>

        <div class="flex flex-wrap gap-4 mb-6 max-[960px]:justify-center">
          <v-btn color="primary" size="large" rounded href="#project-page">
            {{ t("project.text") }}
          </v-btn>
          <v-btn variant="text" size="large" rounded href="#aboutme-page">
            {{ t("aboutme.title") }}
          </v-btn>
        </div>

        <div class="flex flex-wrap gap-3 max-[960px]:justify-center">
          <v-chip
            label
            class="font-semibold"
            prepend-icon="mdi-lightbulb"
            color="primary"
            variant="tonal"
          >
            {{ t("skills.text") }}
          </v-chip>
          <v-chip
            label
            class="font-semibold"
            prepend-icon="mdi-briefcase"
            color="indigo"
            variant="tonal"
          >
            {{ t("project.title") }}
          </v-chip>
          <v-chip
            label
            class="font-semibold"
            prepend-icon="mdi-email"
            color="deep-purple"
            variant="tonal"
          >
            {{ t("aboutme.title") }}
          </v-chip>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="flex justify-center">
        <div
          class="relative p-[22px] rounded-[28px] bg-[linear-gradient(135deg,rgba(59,130,246,0.15),rgba(248,113,113,0.15))] shadow-[0_24px_60px_rgba(15,23,42,0.15)] max-[600px]:p-4"
        >
          <v-avatar
            size="280"
            class="border-4 border-white shadow-[0_14px_30px_rgba(15,23,42,0.25)] max-[600px]:!h-[220px] max-[600px]:!w-[220px]"
          >
            <v-img :src="profileImg" alt="Nonthachai" cover />
          </v-avatar>
          <div
            class="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)] -z-10"
          ></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
