<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const { t } = useI18n();
const drawer = ref(false); // ควบคุม Sidebar

const navbar_items = computed(() => [
    { text: t('home.text'), href: "#home-page", icon: "mdi-home-outline" },
    { text: t('about.text'), href: "#about-page", icon: "mdi-information-outline" },
    { text: t('skill.text'), href: "#skill-page", icon: "mdi-star-outline" },
    { text: t('contact.text'), href: "#contact-page", icon: "mdi-email-outline" },
]);
</script>

<template>
    <!-- App Bar (Fixed Navbar) -->
    <v-app-bar app fixed elevation="4" density="comfortable" class="custom-app-bar">
        <v-row align="center" style="width: 100%;" justify="space-between" class="px-8">

            <v-responsive class="d-flex align-center">
                <strong class="text-h6 d-none d-md-inline d-sm-inline text-md-body-1 text-lg-h6">
                    Nontachai's Portfolio
                </strong>
                <strong class="text-h6 d-inline d-md-none d-sm-none text-md-body-1 text-lg-h6">
                    Portfolio
                </strong>
            </v-responsive>

            <!-- Navbar สำหรับ Desktop -->
            <div class="d-none d-md-flex">
                <v-btn v-for="(item, index) in navbar_items" :key="index" :prepend-icon="item.icon" :to="item.href"
                    variant="plain" class="mx-2">
                    <strong>{{ item.text }}</strong>
                </v-btn>
            </div>

            <div class="d-flex align-center">
                <LayoutFullVerticalHeaderLanguageSwitcher />
                <LayoutFullVerticalHeaderThemeSwitcher />
            </div>
            <!-- Hamburger Menu (เฉพาะมือถือ) -->
            <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-row>
    </v-app-bar>

    <!-- Sidebar สำหรับมือถือ -->
    <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
            <v-list-item v-for="(item, index) in navbar_items" :key="index" :to="item.href">
                <template v-slot:prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- เนื้อหาหลัก -->
    <v-main>
        <router-view></router-view>
    </v-main>
</template>
