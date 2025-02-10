<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const projects = [
    {
        title: "Project One",
        description: "Description for project one.",
        link: "#"
    },
    {
        title: "Project Two",
        description: "Description for project two.",
        link: "#"
    },
    {
        title: "Project Three",
        description: "Description for project three.",
        link: "#"
    }
];
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>{{ t('welcomeMessage') }}</h1>
                <p>{{ t('description') }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="project in projects" :key="project.title" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ project.title }}</v-card-title>
                    <v-card-text>{{ project.description }}</v-card-text>
                    <v-card-actions>
                        <v-btn :href="project.link" target="_blank">{{ t('viewProject') }}</v-btn>
                    </v-card-actions>
                </v-card>
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

p {
    color: #757575;
    text-align: center;
    margin-top: 10px;
}

v-card {
    margin: 20px 0;
}

v-card-title {
    font-weight: bold;
}

v-card-text {
    color: #757575;
}

v-btn {
    color: #3f51b5;
}
</style>