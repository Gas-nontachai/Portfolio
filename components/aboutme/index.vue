<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import resume from "@/assets/pdf/CV Nonthachai.pdf";
const { t } = useI18n();

const contact = computed(() => [
  {
    name: t("aboutme.tel"),
    icon: "mdi-phone",
    color: "yellow-darken-2",
    href: "tel:+66885639233",
  },
  {
    name: t("aboutme.email"),
    icon: "mdi-email",
    color: "blue-darken-1",
    href: "mailto:ggasnontachai@gmail.com",
  },
  {
    name: t("aboutme.facebook"),
    icon: "mdi-facebook",
    color: "blue-darken-3",
    href: "https://www.facebook.com/NontachaiProsri/",
  },
  {
    name: t("aboutme.line"),
    icon: "mdi-chat-processing",
    color: "green-darken-1",
    href: "https://line.me/ti/p/~gasza1",
  },
  {
    name: t("aboutme.github"),
    icon: "mdi-github",
    color: "grey-darken-3",
    href: "https://github.com/Gas-nontachai",
  },
  {
    name: t("aboutme.resume"),
    icon: "mdi-file-document-outline",
    color: "red-darken-2",
    href: resume,
  },
]);
</script>

<template>
  <v-container class="about">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <div class="section-kicker">{{ t("aboutme.title") }}</div>
        <h2 class="section-title kanit-medium">{{ t("aboutme.title") }}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="item in contact"
        :key="item.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="contact-card"
          elevation="8"
          :href="item.href"
          target="_blank"
        >
          <v-card-text class="contact-body">
            <v-icon :color="item.color" size="30">{{ item.icon }}</v-icon>
            <div class="contact-text">{{ item.name }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about {
  max-width: 1200px;
}

.section-kicker {
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(248, 250, 252, 0.65);
}

.section-title {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-top: 12px;
  color: #f8fafc;
}

.contact-card {
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.08), rgba(15, 23, 42, 0.8));
  color: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.35);
}

.contact-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  align-items: flex-start;
}

.contact-text {
  font-size: 1.1rem;
  font-weight: 600;
}

@media (max-width: 960px) {
  .about {
    padding: 0 12px;
  }

  .contact-body {
    align-items: center;
    text-align: center;
  }
}
</style>
