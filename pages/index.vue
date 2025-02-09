<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
    <div>
        <section id="home-page">
            <div class="section home">
                <h1>{{ t('home.welcome') }}</h1>
                <p>{{ t('home.description') }}</p>
            </div>
        </section>
        <section id="about-page">
            <div class="section about">
                <h2>{{ t('about.title') }}</h2>
                <p>{{ t('about.description') }}</p>
            </div>
        </section>
        <section id="skill-page">
            <div class="section skill">
                <h2>{{ t('skill.title') }}</h2>
                <p>{{ t('skill.description') }}</p>
            </div>
        </section>
        <section id="contact-page">
            <div class="section contact">
                <h2>{{ t('contact.title') }}</h2>
                <p>{{ t('contact.description') }}</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
h1,
h2 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

p {
    font-size: 18px;
    color: #555;
    text-align: center;
}

.section {
    height: 1000px;
    width: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.home {
    background-color: #f9f9f9;
}

.about {
    background-color: #f0f0f0;
}

.skill {
    background-color: #e9e9e9;
}

.contact {
    background-color: #e0e0e0;
}
</style>
