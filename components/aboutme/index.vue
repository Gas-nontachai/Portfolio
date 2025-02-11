<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const contact = computed(() => [
    { name: t('aboutme.tel'), icon: "mdi-phone", color: "yellow", href: "tel:+66885639233" },
    { name: t('aboutme.email'), icon: "mdi-email", color: "blue", href: "mailto:ggasnontachai@gmail.com" },
    { name: t('aboutme.facebook'), icon: "mdi-facebook", color: "blue", href: "https://www.facebook.com/NontachaiProsri/" },
    { name: t('aboutme.line'), icon: "mdi-chat-processing", color: "green", href: "https://line.me/ti/p/~gasza1" },
    { name: t('aboutme.github'), icon: "mdi-github", color: "black", href: "https://github.com/Gas-nontachai" },
]);
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="pa-5" elevation="3">
                    <v-card-title class="text-center text-primary text-h4 kanit-medium">
                        <strong class="kanit-medium">{{ t('aboutme.title') }}</strong>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="my-3"></v-divider>
                        <v-row class="justify-center mt-5">
                            <v-col v-for="item in contact" :key="item.name" cols="6" sm="4" md="2">

                                <a :href="item.href" target="_blank" style="text-decoration: none;">
                                    <v-card-text
                                        class="border d-none d-sm-flex align-center justify-center flex-column">
                                        <div>
                                            <v-icon :size="30" :color="item.color">{{ item.icon }}</v-icon>
                                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        </div>
                                    </v-card-text>
                                </a>

                                <div class=" d-flex d-sm-none align-center justify-center flex-column">
                                    <div class="d-flex align-center">
                                        <a :href="item.href" target="_blank" style="text-decoration: none;">
                                            <v-icon :size="30" :color="item.color" class="mr-3">
                                                {{ item.icon }}</v-icon>
                                            <span>{{ item.name }}</span>
                                        </a>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
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

v-form {
    margin-top: 20px;
}

v-btn {
    margin-top: 20px;
}
</style>