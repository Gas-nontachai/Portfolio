<script setup lang="ts">
import "animate.css";
</script>

<template>
  ​
  <!-- Home -->
  <section id="home-page" class="w-full">
    <Home />
  </section>

  <!-- Skill -->
  <section
    id="skill-page"
    class="w-full bg-[linear-gradient(180deg,#f6f2ee_0%,#fff7ed_50%,#fefce8_100%)]"
  >
    <Skill />
  </section>

  <!-- Project -->
  <section
    id="project-page"
    class="w-full bg-[linear-gradient(180deg,#fefce8_0%,#eef2ff_100%)]"
  >
    <Project />
  </section>

  <!-- About Me -->
  <section id="aboutme-page" class="w-full">
    <Aboutme />
  </section>
  ​
</template>
