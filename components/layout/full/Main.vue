<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { computed } from "vue";

const navbar_items = computed(() => [
    { text: t('home.text'), href: "#home-page", icon: "mdi-home-outline" },
    { text: t('about.text'), href: "#about-page", icon: "mdi-information-outline" },
    { text: t('skill.text'), href: "#skill-page", icon: "mdi-star-outline" },
    { text: t('contact.text'), href: "#contact-page", icon: "mdi-email-outline" },
]);
</script>

<template>
    <v-app-bar elevation="4" density="comfortable" class="custom-app-bar">
        <v-container>
            <v-row align="center" justify="space-between">
                <v-icon class="mr-4" size="50">mdi-home-outline</v-icon>
                <v-row align="center" class="flex-grow-1 justify-center">
                    <v-btn v-for="(item, index) in navbar_items" :key="index" :prepend-icon="item.icon" :to="item.href"
                        variant="plain" class="mx-2">
                        <strong>{{ item.text }}</strong>
                    </v-btn>
                </v-row>
                <!-- Language Switcher -->
                <LayoutFullVerticalHeaderLanguageSwitcher />
            </v-row>
        </v-container>
    </v-app-bar>
</template>