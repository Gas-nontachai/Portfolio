<script setup lang="ts">
import "animate.css";
</script>

<template>
  <div
    class="min-h-screen text-slate-900 bg-[radial-gradient(1200px_600px_at_10%_-10%,#ffe8d6_0%,transparent_55%),radial-gradient(900px_500px_at_90%_10%,#dbeafe_0%,transparent_55%),linear-gradient(180deg,#f9fafb_0%,#ffffff_100%)]"
  >
    <section
      id="home-page"
      class="w-full py-[96px] pt-[140px] max-[960px]:py-[72px] max-[960px]:pt-[110px] max-[600px]:py-[56px]"
    >
      <Home />
    </section>
    <section
      id="skill-page"
      class="w-full py-[96px] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <Skill />
    </section>
    <section
      id="project-page"
      class="w-full py-[96px] bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <Project />
    </section>
    <section
      id="aboutme-page"
      class="w-full py-[96px] bg-[#0f172a] text-slate-50 max-[960px]:py-[72px] max-[600px]:py-[56px]"
    >
      <Aboutme />
    </section>
  </div>
</template>
