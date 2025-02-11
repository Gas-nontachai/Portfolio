<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import 'animate.css';
</script>

<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" class="text-center">
                <img src="../../assets/img/nontachai.jpg" alt="Nontachai" class="animate__animated animate__fadeInDown"
                    style="border-radius: 50%; width: 200px; height: 200px; object-fit: cover;">
            </v-col>
            <v-col cols="12" md="8" class="text-center">
                <p class="mt-10 kanit-extrabold" style="font-size: x-large;">{{ t('name') }}</p>
                <span class="mx-3 animate__animated animate__fadeInRight">{{ t('home.description') }}</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
@media (max-width: 600px) {
    img {
        width: 150px;
        height: 150px;
    }

    p {
        font-size: large;
    }
}
</style>