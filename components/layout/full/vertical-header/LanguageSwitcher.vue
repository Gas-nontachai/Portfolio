<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const currentLocale = ref<"en" | "th">("th");

const changeLocale = () => {
  currentLocale.value = currentLocale.value === "en" ? "th" : "en";
  localStorage.setItem("lang", currentLocale.value);
  locale.value = currentLocale.value;
};

onMounted(() => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    currentLocale.value = savedLang as "en" | "th";
    locale.value = currentLocale.value;
  }
});
</script>

<template>
  <div class="inline-block">
    <v-btn
      id="locale-select"
      @click="changeLocale"
      class="text-[14px] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] cursor-pointer flex items-center justify-center"
    >
      <v-img
        :src="
          currentLocale === 'en'
            ? 'https://cdn-icons-png.flaticon.com/128/197/197374.png'
            : 'https://cdn-icons-png.flaticon.com/128/197/197452.png'
        "
        class="w-6 h-6"
        width="24"
        height="24"
      />
      <span class="d-none d-md-inline ml-4 d-md-ml-0">
        {{ currentLocale === "en" ? "English" : "ไทย" }}
      </span>
    </v-btn>
  </div>
</template>
