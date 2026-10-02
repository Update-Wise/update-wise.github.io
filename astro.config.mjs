// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: replace `site` with the final domain once available.
export default defineConfig({
  site: "https://update-wise.github.io",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt", "zh"],
    routing: { prefixDefaultLocale: false },
  },
});
