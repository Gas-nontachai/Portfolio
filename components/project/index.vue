<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Project {
    title: string;
    description: string;
    detail: string;
    img: string[];
    link: string[];
}

const projects = computed<Project[]>(() => [
    {
        title: t("project.projectOne.title"),
        description: t("project.projectOne.description"),
        detail: t("project.projectOne.detail"),
        link: ["https://github.com/Gas-nonthachai/Final-Project"],
        img: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
    },
    {
        title: t("project.projectTwo.title"),
        description: t("project.projectTwo.description"),
        detail: t("project.projectTwo.detail"),
        link: [],
        img: ["7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"]
    },
    {
        title: t("project.projectThree.title"),
        description: t("project.projectThree.description"),
        detail: t("project.projectThree.detail"),
        link: ["https://github.com/Gas-nonthachai/8BuildIn_frontend/", "https://github.com/Gas-nonthachai/8BuildIn_backend"],
        img: ["pj3 (1).png", "pj3 (2).png", "pj3 (3).png", "pj3 (4).png", "pj3 (5).png", "pj3 (6).png", "pj3 (7).png", "pj3 (8).png", "pj3 (9).png"]
    },
    {
        title: t("project.projectFour.title"),
        description: t("project.projectFour.description"),
        detail: t("project.projectFour.detail"),
        link: ["https://github.com/Gas-nontachai/ggas_stock_backend/tree/dev", "https://github.com/Gas-nontachai/ggas_stock_frontend/tree/dev"],
        img: ["pj4 (1).png", "pj4 (2).png", "pj4 (3).png", "pj4 (4).png", "pj4 (5).png", "pj4 (6).png", "pj4 (7).png", "pj4 (8).png", "pj4 (9).png", "pj4 (10).png", "pj4 (11).png", "pj4 (12).png"]
    },
]);

const current_img = ref<string[]>([]);
const dialog_img = ref(false);

const getImageUrl = (imagename: string) => {
    return new URL(`/public/project/${imagename}`, import.meta.url).href;
};

const toogleFullImg = (image: string[]) => {
    current_img.value = image;
    dialog_img.value = true;
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

        <v-row align="stretch" :cols="12" :md="4" :lg="2" class="d-flex justify-start">
            <v-col v-for="project in projects" :key="project.title" cols="12" md="6" lg="6" class="mb-5">
                <v-card class="d-flex flex-column h-100 pa-4" elevation="10" style="border-radius: 20px; ">
                    <v-card-title class="kanit-medium font-weight-bold mb-2">
                        {{ project.title }}
                    </v-card-title>

                    <v-card-text class=" flex-grow-1 mb-2">
                        <span class="kanit">{{ project.description }}</span>
                    </v-card-text>

                    <v-card-text class="kanit-thin mb-3 mx-1">
                        <v-icon left color="primary" class="mr-1">mdi-information-outline</v-icon>
                        <span style="font-size: 0.95rem;">{{ project.detail }}</span>
                    </v-card-text>

                    <!-- Carousel -->
                    <v-carousel show-arrows="hover" hide-delimiters class="d-none d-sm-block rounded-lg elevation-3"
                        interval="3000" cycle height="240">
                        <v-carousel-item v-if="project.img" v-for="(img, index) in project.img" :key="index"
                            :src="getImageUrl(img)" @click="toogleFullImg(project.img)" class="cursor-pointer" />
                        <v-carousel-item v-else src="https://placehold.co/600x400?text=Not+Allowed" />
                    </v-carousel>

                    <!-- GitHub Links (desktop) -->
                    <v-card-actions class="d-none d-sm-flex justify-end mt-3">
                        <v-btn v-for="(link, index) in project.link" :key="index" :href="link" target="_blank"
                            class="mx-2" color="primary" variant="elevated" rounded>
                            <v-icon class="mr-2">mdi-github</v-icon>
                            {{ t("project.viewGitHub") }}
                        </v-btn>
                    </v-card-actions>

                    <!-- Mobile view image button -->
                    <v-card-actions class="d-flex d-sm-none justify-center mt-3">
                        <v-btn @click="toogleFullImg(project.img)" color="primary" rounded variant="outlined">
                            <v-icon class="mr-2">mdi-eye</v-icon>
                            {{ t("project.view") }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Full Image Dialog -->
    <v-dialog v-model="dialog_img" max-width="80%">
        <v-btn icon @click="dialog_img = false" class="ma-2" style="position: absolute; top: 0; right: 0; z-index: 10;">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-carousel show-arrows="hover" hide-delimiters height="80vh">
            <v-carousel-item v-for="(img, index) in current_img" :key="index" :src="getImageUrl(img)" fit />
        </v-carousel>
    </v-dialog>
</template>
