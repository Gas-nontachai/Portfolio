<script setup lang="ts">
import "animate.css";
</script>

<template>
  <div class="min-h-screen text-slate-900 bg-[#f6f2ee] relative">
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ffd6a5_0%,transparent_65%)] blur-3xl"
      ></div>
      <div
        class="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,#c7d2fe_0%,transparent_65%)] blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,#bbf7d0_0%,transparent_65%)] blur-3xl"
      ></div>
    </div>

    <section
      id="home-page"
      class="relative w-full pt-[140px] pb-[96px] max-[960px]:pt-[120px] max-[960px]:pb-[72px] max-[600px]:pt-[104px] max-[600px]:pb-[56px]"
    >
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_45%,rgba(255,255,255,0.2)_100%)]"
      ></div>
      <Home />
    </section>

    <section
      id="skill-page"
      class="relative w-full py-[96px] bg-[linear-gradient(180deg,#f6f2ee_0%,#fff7ed_50%,#fefce8_100%)] max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <Skill />
    </section>

    <section
      id="project-page"
      class="relative w-full py-[96px] bg-[linear-gradient(180deg,#fefce8_0%,#eef2ff_100%)] max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <Project />
    </section>

    <section
      id="aboutme-page"
      class="relative w-full py-[96px] bg-[#0b1020] text-slate-50 max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.18),transparent_55%)]"
      ></div>
      <Aboutme />
    </section>
  </div>
</template>
