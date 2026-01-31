<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import resume from "@/assets/pdf/CV Nonthachai.pdf";
const { t } = useI18n();

const contact = computed(() => [
  {
    name: t("aboutme.tel"),
    icon: "mdi-phone",
    color: "yellow-darken-2",
    href: "tel:+66885639233",
  },
  {
    name: t("aboutme.email"),
    icon: "mdi-email",
    color: "blue-darken-1",
    href: "mailto:ggasnontachai@gmail.com",
  },
  {
    name: t("aboutme.facebook"),
    icon: "mdi-facebook",
    color: "blue-darken-3",
    href: "https://www.facebook.com/NontachaiProsri/",
  },
  {
    name: t("aboutme.line"),
    icon: "mdi-chat-processing",
    color: "green-darken-1",
    href: "https://line.me/ti/p/~gasza1",
  },
  {
    name: t("aboutme.github"),
    icon: "mdi-github",
    color: "grey-darken-3",
    href: "https://github.com/Gas-nontachai",
  },
  {
    name: t("aboutme.resume"),
    icon: "mdi-file-document-outline",
    color: "red-darken-2",
    href: resume,
  },
]);
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <div class="text-[13px] tracking-[0.3em] uppercase text-slate-100/65">
          {{ t("aboutme.title") }}
        </div>
        <h2
          class="text-[clamp(2rem,3vw,2.8rem)] mt-3 text-slate-50 kanit-medium"
        >
          {{ t("aboutme.title") }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="item in contact" :key="item.name" cols="12" sm="6" md="4">
        <v-card
          class="rounded-[20px] bg-[linear-gradient(135deg,rgba(248,250,252,0.08),rgba(15,23,42,0.8))] text-slate-50 border border-slate-400/20 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(15,23,42,0.35)]"
          elevation="8"
          :href="item.href"
          target="_blank"
        >
          <v-card-text
            class="flex flex-col gap-4 p-6 items-start max-[960px]:items-center max-[960px]:text-center"
          >
            <v-icon :color="item.color" size="30">{{ item.icon }}</v-icon>
            <div class="text-[1.1rem] font-semibold">{{ item.name }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
