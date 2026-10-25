// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://updatewise.com.co",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt", "zh"],
    routing: { prefixDefaultLocale: false },
  },
});
