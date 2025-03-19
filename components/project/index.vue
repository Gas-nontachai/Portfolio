<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = computed(() => [
    {
        title: t("project.projectOne.title"),
        description: t("project.projectOne.description"),
        detail: t("project.projectOne.detail"),
        link: ["https://github.com/Gas-nontachai/Final-Project"],
        img: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
    },
    {
        title: t("project.projectTwo.title"),
        description: t("project.projectTwo.description"),
        detail: t("project.projectTwo.detail"),
        link: '#',
        img: ["7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"]
    },
    {
        title: t("project.projectThree.title"),
        description: t("project.projectThree.description"),
        detail: t("project.projectThree.detail"),
        link: ["https://github.com/Gas-nontachai/8BuildIn_frontend/", "https://github.com/Gas-nontachai/8BuildIn_backend"],
        img: ""
    },
]);

const current_img = ref<string[]>([]);
const dialog_img = ref(false);

const getImageUrl = (imagename: string) => {
    const imageUrl = new URL(`/plubic/project/${imagename}`, import.meta.url).href
    return imageUrl;
}

const toogleFullImg = (imagename: string[]) => {
    current_img.value = imagename;
    dialog_img.value = true;
} 
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
            <v-col v-for="project in projects" :key="project.title" cols="4" md="6" lg="12" class="mb-5">
                <v-card class="d-flex flex-column h-100" elevation="10">
                    <v-card-title style="font-size: x-large;">{{ project.title }}</v-card-title>
                    <v-card-text class="flex-grow-1">
                        {{ project.description }}
                    </v-card-text>
                    <span class="mx-10">{{ project.detail }}</span>
                    <v-carousel show-arrows="hover" hide-delimiters class="d-none d-md-block">
                        <v-carousel-item v-if="project.img" v-for="(img, index) in project.img" :key="index"
                            :src="getImageUrl(img)" fit @click="toogleFullImg(project.img)" />
                        <v-carousel-item v-else src="https://placehold.co/600x400?text=Not+Allowed" fit />
                    </v-carousel>

                    <v-card-actions class="d-none d-md-block">
                        <template v-for="(link, index) in project.link">
                            <v-btn v-if="link !== '#'" :key="index" :href="link" target="_blank"
                                class="d-flex align-center justify-center ">
                                <v-icon class="mx-2">mdi-github</v-icon> {{ t("project.viewGitHub") }}
                            </v-btn>
                        </template>
                    </v-card-actions>

                    <v-card-actions class="d-block d-md-none">
                        <v-btn @click="toogleFullImg(project.img)" class="d-flex align-center justify-center">
                            <v-icon class="mx-2">mdi-eye</v-icon> {{ t("project.view") }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="dialog_img" max-width="80%">
        <v-btn icon @click="dialog_img = false" class="ma-2" style="position: absolute; top: 0; right: 0; z-index: 10;">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-carousel show-arrows="hover" hide-delimiters height="80vh">
            <v-carousel-item v-for="(img, index) in current_img" :key="index" :src="getImageUrl(img)" fit />
        </v-carousel>
    </v-dialog>

</template>