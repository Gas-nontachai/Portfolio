<script setup lang="ts">
import "animate.css";
</script>

<template>
  <v-container fluid max-width="80%">
    <section id="home-page" class="section home">
      <Home />
    </section>
    <section id="skill-page" class="section skill">
      <Skill />
    </section>
    <section id="project-page" class="section project">
      <Project />
    </section>
    <section id="aboutme-page" class="section aboutme">
      <Aboutme />
    </section>
  </v-container>
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
