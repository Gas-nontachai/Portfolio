<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <v-app>
        <v-btn @click="toggleTheme" class="ma-2" color="primary" dark>
            <v-icon left>mdi-theme-light-dark</v-icon>
            Toggle Theme
        </v-btn>
    </v-app>
</template>
