<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const ProgrammingLanguages = [
    { name: "JavaScript", icon: "mdi-language-javascript", color: "yellow" },
    { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    { name: "PHP", icon: "mdi-language-php", color: "purple" },
    { name: "HTML", icon: "mdi-language-html5", color: "orange" },
    { name: "CSS", icon: "mdi-language-css3", color: "blue" },
    { name: "Node.js", icon: "mdi-nodejs", color: "green" },
    { name: "SQL", icon: "mdi-database", color: "green" },
    { name: "Dart", icon: "mdi-flask", color: "blue" },
];

const tools = [
    { name: "VS Code", icon: "mdi-microsoft-visual-studio-code", color: "blue" },
    { name: "Postman", icon: "mdi-api", color: "orange" },
    { name: "GitHub Desktop", icon: "mdi-github", color: "black" },
    { name: "Figma", icon: "mdi-palette", color: "yellow" },
    { name: "MySQL Workbench", icon: "mdi-database", color: "blue" }
];

const frameworks = [
    { name: "Bootstrap", icon: "mdi-bootstrap", color: "purple" },
    { name: "Tailwind CSS", icon: "mdi-tailwind", color: "blue" },
    { name: "Vuetify", icon: "mdi-vuetify", color: "green" },
    { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    { name: "Nuxt3", icon: "mdi-nuxt", color: "green" },
    { name: "React", icon: "mdi-react", color: "blue" },
    { name: "Flutter", icon: "mdi-language-kotlin", color: "blue" }
];
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="pa-5" elevation="3">
                    <v-card-title class="text-center text-primary text-h4 kanit-medium">
                        <strong> {{ t('skills.title') }}</strong>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="my-3"></v-divider>
                        <v-row class="justify-center mt-5">
                            <v-col>
                                <h2 class="text-h5 text-primary">
                                    <strong class="kanit-medium"> {{ t('skills.programmingLanguages') }}</strong>
                                </h2>
                                <v-row class="justify-center my-3">
                                    <v-col v-for="language in ProgrammingLanguages" :key="language.name" cols="12"
                                        sm="6" md="4" lg="3">
                                        <v-card-text class="border">
                                            <div class="d-flex align-center justify-center flex-column">
                                                <v-icon :size="150" :color="language.color">{{ language.icon }}</v-icon>
                                                <v-list-item-title>{{ language.name }}</v-list-item-title>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-divider class="my-3"></v-divider>

                        <v-row class="justify-center mt-5">
                            <v-col>
                                <h2 class="text-h5 text-primary">
                                    <strong class="kanit-medium"> {{ t('skills.tools') }}</strong>
                                </h2>
                                <v-row class="justify-center my-3">
                                    <v-col v-for=" tool in tools" :key="tool.name" cols="12" sm="6" md="4" lg="3">
                                        <v-card-text class="border">
                                            <div class="d-flex align-center justify-center flex-column">
                                                <v-icon :size="150" :color="tool.color">{{ tool.icon }}</v-icon>
                                                <v-list-item-title>{{ tool.name }}</v-list-item-title>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-divider class="my-3"></v-divider>

                        <v-row class="justify-center mt-5">
                            <v-col>
                                <h2 class="text-h5 text-primary">
                                    <strong class="kanit-medium"> {{ t('skills.frameworks') }}</strong>
                                </h2>
                                <v-row class="justify-center my-3">
                                    <v-col v-for="framework in frameworks" :key="framework.name" cols="12" sm="6" md="4"
                                        lg="3">
                                        <v-card-text class="border">
                                            <div class="d-flex align-center justify-center flex-column">
                                                <v-icon :size="150" :color="framework.color">{{ framework.icon
                                                    }}</v-icon>
                                                <v-list-item-title>{{ framework.name }}</v-list-item-title>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.border {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.border:hover {
    border-color: #aaa;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    background-color: #cecece;
}
</style>