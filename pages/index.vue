<script setup lang="ts">
import 'animate.css';
</script>

<template>
    <div>
        <section id="home-page">
            <div class="section home">
                <Home />
            </div>
        </section>
        <section id="skill-page">
            <div class="section skill">
                <Skill />
            </div>
        </section>
        <section id="project-page">
            <div class="section project">
                <Project />
            </div>
        </section>
        <section id="aboutme-page">
            <div class="section aboutme">
                <Aboutme />
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
    height: auto;
    width: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
