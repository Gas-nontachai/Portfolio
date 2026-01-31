<script setup lang="ts">
import "animate.css";
</script>

<template>
  <div class="page">
    <section id="home-page" class="section section-hero">
      <Home />
    </section>
    <section id="skill-page" class="section section-skill">
      <Skill />
    </section>
    <section id="project-page" class="section section-project">
      <Project />
    </section>
    <section id="aboutme-page" class="section section-about">
      <Aboutme />
    </section>
  </div>
</template>

<style scoped>
.page {
  background: radial-gradient(1200px 600px at 10% -10%, #ffe8d6 0%, transparent 55%),
    radial-gradient(900px 500px at 90% 10%, #dbeafe 0%, transparent 55%),
    linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  color: #111827;
}

.section {
  width: 100%;
  padding: 96px 0;
}

.section-hero {
  padding-top: 140px;
}

.section-skill {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.section-project {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.section-about {
  background: #0f172a;
  color: #f8fafc;
}

@media (max-width: 960px) {
  .section {
    padding: 72px 0;
  }

  .section-hero {
    padding-top: 110px;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 56px 0;
  }
}
</style>
