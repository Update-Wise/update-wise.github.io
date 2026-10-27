# SEO

Implemented in `src/layouts/Layout.astro` (per-page `slug` flows in from
`DocPage.astro` → `MarkdownLayout`).

- `<title>` + meta description are localized (`seo.*` keys in `ui.ts`; doc
  pages use entry frontmatter).
- Self-referencing `canonical` per page.
- `hreflang` set for **the current page** (home set or doc-slug set) plus
  `x-default` → default-locale URL.
- Open Graph (`type/url/title/description/locale` + alternates) and Twitter
  `summary` cards, `theme-color`.
- `sitemap-index.xml` via `@astrojs/sitemap` (404 excluded automatically);
  `public/robots.txt` references it.

## Pending TODOs
- **Artwork:** add a 1200×630 `og:image` (`TODO(art)` in `Layout.astro`).

## Verification

```sh
npm run build
grep -o '<link rel="canonical"[^>]*>' dist/privacy/index.html
grep -o '<link rel="alternate"[^>]*>' dist/en/privacy/index.html
grep -o '<loc>[^<]*</loc>' dist/sitemap-0.xml
```
