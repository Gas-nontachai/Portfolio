<script setup lang="ts">
import profileImg from "@/assets/img/nontachai.jpg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import "animate.css";
</script>

<template>
  <v-container class="hero" fluid>
    <v-row align="center" class="hero-grid">
      <v-col cols="12" md="7">
        <div class="eyebrow">{{ t("home.text") }}</div>
        <h1 class="hero-title kanit-extrabold">
          {{ t("name") }}
        </h1>
        <p class="hero-subtitle kanit">
          {{ t("home.description") }}
        </p>

        <div class="hero-actions">
          <v-btn
            color="primary"
            size="large"
            rounded
            href="#project-page"
          >
            {{ t("project.text") }}
          </v-btn>
          <v-btn
            variant="text"
            size="large"
            rounded
            href="#aboutme-page"
          >
            {{ t("aboutme.title") }}
          </v-btn>
        </div>

        <div class="hero-tags">
          <v-chip
            label
            class="hero-chip"
            prepend-icon="mdi-lightbulb"
            color="primary"
            variant="tonal"
          >
            {{ t("skills.text") }}
          </v-chip>
          <v-chip
            label
            class="hero-chip"
            prepend-icon="mdi-briefcase"
            color="indigo"
            variant="tonal"
          >
            {{ t("project.title") }}
          </v-chip>
          <v-chip
            label
            class="hero-chip"
            prepend-icon="mdi-email"
            color="deep-purple"
            variant="tonal"
          >
            {{ t("aboutme.title") }}
          </v-chip>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex justify-center">
        <div class="portrait-frame">
          <v-avatar size="280" class="portrait">
            <v-img :src="profileImg" alt="Nonthachai" cover />
          </v-avatar>
          <div class="glow"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero {
  max-width: 1200px;
}

.hero-grid {
  position: relative;
  z-index: 1;
}

.eyebrow {
  font-size: 14px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1.1;
  color: #0f172a;
  margin: 0 0 16px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #334155;
  max-width: 560px;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-chip {
  font-weight: 600;
}

.portrait-frame {
  position: relative;
  padding: 22px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(248, 113, 113, 0.15));
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.15);
}

.portrait {
  border: 4px solid #ffffff;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.25);
}

.glow {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: radial-gradient(circle at top, rgba(99, 102, 241, 0.35), transparent 60%);
  z-index: -1;
}

@media (max-width: 960px) {
  .hero {
    padding: 0 12px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-tags {
    justify-content: center;
  }

  .hero-title,
  .hero-subtitle,
  .eyebrow {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .portrait-frame {
    padding: 16px;
  }

  .portrait {
    width: 220px;
    height: 220px;
  }
}
</style>
