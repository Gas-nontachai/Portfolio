<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>

<template>
    <div>
        <section id="home-page">
            <div class="section home">
                <Home />
            </div>
        </section>
        <section id="about-page">
            <div class="section about">
                <About />
            </div>
        </section>
        <section id="skill-page">
            <div class="section skill">
                <Skill />
            </div>
        </section>
        <section id="contact-page">
            <div class="section contact">
                <Contact />
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
