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
</script>

<template>
  <v-container class="skill">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <div class="section-kicker">{{ t("skills.text") }}</div>
        <h2 class="section-title kanit-medium">{{ t("skills.title") }}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="group in groups"
        :key="group.subtitle"
        cols="12"
        md="4"
      >
        <v-card class="group-card" elevation="6">
          <div class="group-header" :class="`tone-${group.tone}`">
            <div class="group-subtitle">{{ group.subtitle }}</div>
            <h3 class="group-title kanit-medium">{{ group.title() }}</h3>
          </div>
          <v-card-text class="group-body">
            <div class="chip-grid">
              <v-chip
                v-for="item in group.items"
                :key="item.name"
                label
                variant="outlined"
                class="skill-chip"
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

<style scoped>
.skill {
  max-width: 1200px;
}

.section-kicker {
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #64748b;
}

.section-title {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-top: 12px;
  color: #0f172a;
}

.group-card {
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
}

.group-header {
  padding: 20px 24px;
  color: #0f172a;
}

.group-subtitle {
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.group-title {
  margin-top: 8px;
  font-size: 1.4rem;
}

.group-body {
  padding: 24px;
}

.chip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-chip {
  font-weight: 600;
  border-color: rgba(15, 23, 42, 0.15);
}

.tone-sun {
  background: linear-gradient(120deg, #fde68a, #fcd34d);
}

.tone-sky {
  background: linear-gradient(120deg, #bfdbfe, #93c5fd);
}

.tone-mint {
  background: linear-gradient(120deg, #bbf7d0, #86efac);
}

@media (max-width: 960px) {
  .skill {
    padding: 0 12px;
  }
}
</style>
