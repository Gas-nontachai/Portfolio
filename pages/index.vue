<script setup lang="ts">
import "animate.css";
</script>

<template>
  <div
    class="min-h-screen text-slate-900 bg-[#f6f2ee] relative grid gap-[96px] max-[960px]:gap-[72px] max-[600px]:gap-[56px]"
  >
    <!-- Background blobs -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ffd6a5_0%,transparent_65%)] blur-3xl"
      />
      <div
        class="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,#c7d2fe_0%,transparent_65%)] blur-3xl"
      />
      <div
        class="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,#bbf7d0_0%,transparent_65%)] blur-3xl"
      />
    </div>

    <!-- Home -->
    <section id="home-page" class="relative w-full">
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_45%,rgba(255,255,255,0.2)_100%)]"
      />
      <Home />
    </section>

    <!-- Skill -->
    <section
      id="skill-page"
      class="relative w-full bg-[linear-gradient(180deg,#f6f2ee_0%,#fff7ed_50%,#fefce8_100%)]"
    >
      <Skill />
    </section>

    <!-- Project -->
    <section
      id="project-page"
      class="relative w-full bg-[linear-gradient(180deg,#fefce8_0%,#eef2ff_100%)]"
    >
      <Project />
    </section>

    <!-- About Me -->
    <section
      id="aboutme-page"
      class="relative w-full bg-[#0b1020] text-slate-50"
    >
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.18),transparent_55%)]"
      />
      <Aboutme />
    </section>
  </div>
</template>
