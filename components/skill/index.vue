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
  sun: "bg-[linear-gradient(120deg,#fde68a,#fb923c)]",
  sky: "bg-[linear-gradient(120deg,#bfdbfe,#818cf8)]",
  mint: "bg-[linear-gradient(120deg,#bbf7d0,#34d399)]",
};
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3">
    <v-row class="items-end" justify="space-between">
      <v-col cols="12" md="8">
        <h2
          class="display mt-4 text-[clamp(2.1rem,3.2vw,3.1rem)] text-slate-900"
        >
          {{ t("skills.title") }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="group in groups" :key="group.subtitle" cols="12" md="4">
        <v-card
          class="rounded-[28px] overflow-hidden h-full border border-black/10 bg-white/80 shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
          elevation="0"
        >
          <div
            class="px-4 py-2 text-slate-900"
            :class="toneClasses[group.tone]"
          >
            <h3 class="mt-3 text-[1.5rem] display">
              {{ group.title() }}
            </h3>
          </div>
          <v-card-text class="p-6">
            <div class="flex flex-wrap gap-3">
              <v-chip
                v-for="item in group.items"
                :key="item.name"
                label
                variant="outlined"
                size="large"
                class="font-semibold text-base border-slate-900/15 bg-white"
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
