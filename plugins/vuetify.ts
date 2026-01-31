// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import LightTheme from "@/theme/light";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "LightTheme",
      themes: {
        LightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
