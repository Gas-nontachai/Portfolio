<script setup lang="ts">
import profileImg from "@/assets/img/nontachai.jpg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <v-container class="max-w-[1200px] mx-auto max-[960px]:px-3" fluid>
    <v-row align="center" class="relative z-[1]" dense>
      <v-col cols="12" md="5" class="flex justify-center py-6">
        <div class="relative">
          <div
            class="absolute -top-6 -left-8 h-24 w-24 rounded-[30px] border border-black/10 bg-white/90 shadow-lg"
          ></div>
          <div
            class="absolute -bottom-6 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,#fde68a_0%,#f59e0b_60%,transparent_70%)] blur-lg"
          ></div>
          <div
            class="relative rounded-[34px] border border-black/10 bg-[linear-gradient(135deg,#ffffff,rgba(255,255,255,0.6))] p-5 shadow-[0_30px_70px_rgba(15,23,42,0.2)]"
          >
            <v-avatar
              items-center
              gap-3
              size="300"
              class="border-4 border-white shadow-[0_18px_40px_rgba(15,23,42,0.28)] max-[600px]:!h-[230px] max-[600px]:!w-[230px]"
            >
              <v-img :src="profileImg" alt="Nonthachai" cover />
            </v-avatar>
            <div
              class="absolute inset-0 -z-10 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]"
            ></div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7" class="pb-4"
        >​
        <h1
          class="display mt-5 text-[clamp(2.6rem,4.5vw,4.4rem)] leading-[1.05] text-slate-900 max-[960px]:text-center"
        >
          {{ t("name") }}
          <span
            class="block text-transparent bg-clip-text bg-[linear-gradient(120deg,#0f172a,#1d4ed8,#f97316)]"
          >
            Portfolio
          </span>
        </h1>
        <p
          class="mt-5 text-[1.05rem] text-slate-700 max-w-[620px] max-[960px]:mx-auto max-[960px]:text-center"
        >
          {{ t("home.description") }}
        </p>
        ​​
      </v-col>
    </v-row>
  </v-container>
</template>
