<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const ProgrammingLanguages = [
  { name: "HTML", icon: "mdi-language-html5", color: "orange" },
  { name: "CSS", icon: "mdi-language-css3", color: "blue" },
  { name: "JavaScript", icon: "mdi-language-javascript", color: "yellow" },
  { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
  { name: "PHP", icon: "mdi-language-php", color: "purple" },
  { name: "Node.js", icon: "mdi-nodejs", color: "green" },
  { name: "Dart", icon: "mdi-flask", color: "blue" },
  { name: "SQL", icon: "mdi-database", color: "green" },
  { name: "NoSQL", icon: "mdi-database-outline", color: "teal" },
];

const tools = [
  { name: "VS Code", icon: "mdi-microsoft-visual-studio-code", color: "blue" },
  { name: "Postman", icon: "mdi-api", color: "orange" },
  { name: "GitHub Desktop", icon: "mdi-github", color: "black" },
  { name: "MySQL Workbench", icon: "mdi-database", color: "blue" },
  { name: "MongoDB", icon: "mdi-leaf", color: "green" },
  { name: "Figma", icon: "mdi-palette", color: "yellow" },
];

const frameworks = [
  { name: "Bootstrap", icon: "mdi-bootstrap", color: "purple" },
  { name: "Tailwind CSS", icon: "mdi-tailwind", color: "blue" },
  { name: "Vuetify", icon: "mdi-vuetify", color: "blue" },
  { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
  { name: "React", icon: "mdi-react", color: "blue" },
  { name: "Next.js", icon: "mdi-react", color: "black" },
  { name: "Nuxt3", icon: "mdi-nuxt", color: "green" },
  { name: "Flutter", icon: "mdi-language-kotlin", color: "blue" },
];

const groups = [
  {
    title: () => t("skills.programmingLanguages"),
    subtitle: "Code",
    tone: "sun",
    items: ProgrammingLanguages,
  },
  {
    title: () => t("skills.frameworks"),
    subtitle: "Build",
    tone: "sky",
    items: frameworks,
  },
  {
    title: () => t("skills.tools"),
    subtitle: "Tools",
    tone: "mint",
    items: tools,
  },
];

const toneClasses: Record<string, string> = {
  sun: "bg-[linear-gradient(120deg,#fde68a,#fcd34d)]",
  sky: "bg-[linear-gradient(120deg,#bfdbfe,#93c5fd)]",
  mint: "bg-[linear-gradient(120deg,#bbf7d0,#86efac)]",
};
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <div class="text-[13px] tracking-[0.3em] uppercase text-slate-500">
          {{ t("skills.text") }}
        </div>
        <h2
          class="text-[clamp(2rem,3vw,2.8rem)] mt-3 text-slate-900 kanit-medium"
        >
          {{ t("skills.title") }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="group in groups" :key="group.subtitle" cols="12" md="4">
        <v-card class="rounded-[24px] overflow-hidden h-full" elevation="6">
          <div
            class="px-6 py-5 text-slate-900"
            :class="toneClasses[group.tone]"
          >
            <div class="text-[12px] tracking-[0.2em] uppercase">
              {{ group.subtitle }}
            </div>
            <h3 class="mt-2 text-[1.4rem] kanit-medium">{{ group.title() }}</h3>
          </div>
          <v-card-text class="p-6">
            <div class="flex flex-wrap gap-3">
              <v-chip
                v-for="item in group.items"
                :key="item.name"
                label
                variant="outlined"
                class="font-semibold border-slate-900/15"
              >
                <v-icon :color="item.color" start>{{ item.icon }}</v-icon>
                {{ item.name }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
