<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const email = ref('');
const name = ref('');
const message = ref('');
const title = ref('');
const sendEmail = () => {
    console.log(`Email sent to bigboy2546.77@gmail.com from ${name.value} (${email.value}): ${message.value}`);
};
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>{{ t('welcomeMessage') }}</h1>
                <p>{{ t('description') }}</p>
                <v-form>
                    <v-text-field v-model="name" :label="t('nameLabel')" required></v-text-field>
                    <v-text-field v-model="email" :label="t('emailLabel')" required></v-text-field>
                    <v-text-field v-model="title" :label="t('titleLabel')" required></v-text-field>
                    <v-textarea v-model="message" :label="t('messageLabel')" required></v-textarea>
                    <v-btn color="primary" @click="sendEmail">{{ t('sendButton') }}</v-btn>
                </v-form>
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