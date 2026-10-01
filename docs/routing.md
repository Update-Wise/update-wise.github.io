# Routing

`astro.config.mjs` sets `prefixDefaultLocale: false`, so the default locale
(`es`) has **no URL prefix** and `/es/` intentionally 404s.

| Page | es | en | pt | zh |
| --- | --- | --- | --- | --- |
| Home | `/` | `/en/` | `/pt/` | `/zh/` |
| Docs | `/<slug>` | `/en/<slug>` | `/pt/<slug>` | `/zh/<slug>` |

Current slugs come from the `pages` collection: `privacy`, `terms`, `cookies`
(see `content.md`). Non-default doc routes fall back to the `es` entry when a
translation is missing (`src/pages/[lang]/[slug].astro`).

## Adding a page

- **Home section:** edit/add a component in `src/components/` and compose it in
  `Home.astro` — all four homes update at once.
- **Doc page:** add `src/content/<lang>/<slug>.md` for each locale (at minimum
  `es/`, the fallback source). No route file changes needed — `getStaticPaths`
  picks it up automatically. Link to it with `getDocPath(lang, "<slug>")`.

## 404

`src/pages/404.astro` builds to `/404.html`, which static hosts serve for
unknown paths. It is excluded from the sitemap. Because it prerenders once, it
shows the recovery message in all four languages instead of detecting one.
