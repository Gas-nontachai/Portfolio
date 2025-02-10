<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>{{ t('welcomeMessage') }}</h1>
                <p>{{ t('description') }}</p>
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
</style>