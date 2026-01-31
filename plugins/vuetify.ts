// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { LightTheme, DarkTheme } from "@/theme/theme";

export default defineNuxtPlugin((app) => {
  let defaultTheme = "light";
  if (process.client) {
    const storedTheme = localStorage.getItem("theme");
    defaultTheme =
      storedTheme === "DarkTheme"
        ? "dark"
        : storedTheme === "LightTheme"
          ? "light"
          : storedTheme || "light";
  }

  const vuetify = createVuetify({
    theme: {
      defaultTheme,
      themes: {
        light: LightTheme,
        dark: DarkTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
