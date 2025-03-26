<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from "vue-i18n";
import resume from "@/assets/pdf/Nontachai_Resume.pdf";
const { t } = useI18n();

const contact = computed(() => [
    { name: t('aboutme.tel'), icon: "mdi-phone", color: "yellow", href: "tel:+66885639233" },
    { name: t('aboutme.email'), icon: "mdi-email", color: "blue", href: "mailto:ggasnontachai@gmail.com" },
    { name: t('aboutme.facebook'), icon: "mdi-facebook", color: "blue", href: "https://www.facebook.com/NontachaiProsri/" },
    { name: t('aboutme.line'), icon: "mdi-chat-processing", color: "green", href: "https://line.me/ti/p/~gasza1" },
    { name: t('aboutme.github'), icon: "mdi-github", color: "black", href: "https://github.com/Gas-nontachai" },
    { name: t('aboutme.resume'), icon: "mdi-file", color: "red", href: resume }
]);
</script>

<template>
    <v-container>
        <v-row class="justify-center align-center">
            <v-col cols="12">
                <v-card class="pa-5" elevation="3">
                    <v-card-title class="text-center text-primary text-h4 kanit-medium">
                        <strong class="kanit-medium">{{ t('aboutme.title') }}</strong>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="my-3"></v-divider>
                        <v-row class="justify-center mt-5">
                            <v-col v-for="item in contact" :key="item.name" cols="6" sm="4" md="2">
                                <!-- Desktop version -->
                                <v-btn :href="item.href" target="_blank"
                                    class="d-none d-sm-flex flex-column align-center" variant="text">
                                    <v-icon :size="30" :color="item.color">{{ item.icon }}</v-icon>
                                    <span>{{ item.name }}</span>
                                </v-btn>

                                <!-- Mobile version -->
                                <div class="d-flex d-sm-none align-center justify-center">
                                    <a :href="item.href" target="_blank"
                                        class="d-flex align-center text-decoration-none">
                                        <v-icon :size="30" :color="item.color" class="mr-3">
                                            {{ item.icon }}
                                        </v-icon>
                                        <span>{{ item.name }}</span>
                                    </a>
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
.text-center {
    text-align: center;
}

.text-primary {
    color: #3f51b5;
}

.text-decoration-none {
    text-decoration: none;
}
</style>
