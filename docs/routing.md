# Routing

`astro.config.mjs` sets `prefixDefaultLocale: false`, so the default locale
(`es`) has **no URL prefix** and `/es/` intentionally 404s.

| Page     | es                   | en                      | pt                      | zh                      |
| -------- | -------------------- | ----------------------- | ----------------------- | ----------------------- |
| Home     | `/`                  | `/en/`                  | `/pt/`                  | `/zh/`                  |
| Download | `/download`          | `/en/download`          | `/pt/download`          | `/zh/download`          |
| About    | `/about`             | `/en/about`             | `/pt/about`             | `/zh/about`             |
| FAQ      | `/faq`               | `/en/faq`               | `/pt/faq`               | `/zh/faq`               |
| Support  | `/support`           | `/en/support`           | `/pt/support`           | `/zh/support`           |
| Status   | `/status`            | `/en/status`            | `/pt/status`            | `/zh/status`            |
| Blog     | `/blog`              | `/en/blog`              | `/pt/blog`              | `/zh/blog`              |
| Post     | `/blog/2026/welcome` | `/en/blog/2026/welcome` | `/pt/blog/2026/welcome` | `/zh/blog/2026/welcome` |
| Docs     | `/<slug>`            | `/en/<slug>`            | `/pt/<slug>`            | `/zh/<slug>`            |

Current slugs come from the `pages` collection: `privacy`, `terms`, `cookies`,
`about`, `faq`, `support`, `status` (see `content.md`). Non-default doc routes
fall back to the `es` entry when a translation is missing
(`src/pages/[lang]/[slug].astro`). Blog posts use the same fallback.

`download` is a static page (not a collection entry), so its hreflang set is
built with `slug="download"`. Link to it with `getDownloadPath(lang)`, never
with a `#download` anchor.

## Adding a page

- **Home section:** edit/add a component in `src/components/` and compose it in
  `Home.astro` — all four homes update at once.
- **Doc page:** add `src/content/<lang>/<slug>.md` for each locale (at minimum
  `es/`, the fallback source). No route file changes needed — `getStaticPaths`
  picks it up automatically. Link to it with `getDocPath(lang, "<slug>")`.
- **Static page (like download):** add `src/pages/<page>.astro` plus
  `src/pages/[lang]/<page>.astro`, both rendering one shared component.

## Language switching

`LanguageSelector.astro` keeps the current page: it strips the locale prefix
(`stripLocalePrefix`), re-applies the target prefix (`localizePath`), and
preserves query + hash. Switching from `/en/privacy#x` to `pt` lands on
`/pt/privacy#x`; switching to `es` lands on `/privacy#x`.

## 404

`src/pages/404.astro` builds to `/404.html`, which static hosts serve for
unknown paths. It is excluded from the sitemap. Because it prerenders once, it
shows the recovery message in all four languages, then a small script reads
`navigator.language`, highlights the matching card, and surfaces a suggestion
link to that locale's home.
