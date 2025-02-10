<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const backendSkills = [
    { name: "Node.js", icon: "mdi-nodejs", color: "green" },
    { name: "Express", icon: "mdi-express", color: "blue" },
    { name: "Django", icon: "mdi-language-python", color: "yellow" },
    { name: "Ruby on Rails", icon: "mdi-language-ruby", color: "red" }
];
const frontendSkills = [
    { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    { name: "React", icon: "mdi-react", color: "blue" },
    { name: "Angular", icon: "mdi-angular", color: "red" },
    { name: "Svelte", icon: "mdi-svelte", color: "orange" }
];
const tools = [
    { name: "Git", icon: "mdi-git", color: "orange" },
    { name: "Docker", icon: "mdi-docker", color: "blue" },
    { name: "Webpack", icon: "mdi-webpack", color: "purple" },
    { name: "Babel", icon: "mdi-babel", color: "yellow" }
];
const frameworks = [
    { name: "Bootstrap", icon: "mdi-bootstrap", color: "purple" },
    { name: "Tailwind CSS", icon: "mdi-tailwind", color: "blue" },
    { name: "Vuetify", icon: "mdi-vuetify", color: "green" },
    { name: "Material-UI", icon: "mdi-material-ui", color: "blue" }
];
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>{{ t('skills.title') }}</h1>
                <h2>{{ t('skills.backend') }}</h2>
                <ul>
                    <li v-for="skill in backendSkills" :key="skill.name">
                        <v-icon :icon="skill.icon" :color="skill.color"></v-icon> {{ skill.name }}
                    </li>
                </ul>
                <h2>{{ t('skills.frontend') }}</h2>
                <ul>
                    <li v-for="skill in frontendSkills" :key="skill.name">
                        <v-icon :icon="skill.icon" :color="skill.color"></v-icon> {{ skill.name }}
                    </li>
                </ul>
                <h2>{{ t('skills.tools') }}</h2>
                <ul>
                    <li v-for="tool in tools" :key="tool.name">
                        <v-icon :icon="tool.icon" :color="tool.color"></v-icon> {{ tool.name }}
                    </li>
                </ul>
                <h2>{{ t('skills.frameworks') }}</h2>
                <ul>
                    <li v-for="framework in frameworks" :key="framework.name">
                        <v-icon :icon="framework.icon" :color="framework.color"></v-icon> {{ framework.name }}
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
h1 {
    color: #3f51b5;
    text-align: center;
    margin-top: 20px;
}

h2 {
    color: #3f51b5;
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    color: #757575;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

v-icon {
    margin-right: 8px;
}
</style>