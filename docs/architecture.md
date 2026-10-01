# Architecture

Static multilingual site built with [Astro](https://astro.build) (`output: static`).
Four locales: `es` (default, no URL prefix), `en`, `pt`, `zh`.

```text
src/
├── assets/          # SVG icons imported as components
├── components/      # Page sections + glue components
│   ├── Home.astro         # Home composition (used by every locale home)
│   ├── DocPage.astro      # Collection-entry renderer (used by every doc page)
│   ├── Header.astro / Footer.astro / Hero.astro / ...
│   └── Languageselector.astro
├── content/         # "pages" collection: <lang>/<slug>.md (privacy, terms, cookies)
├── content.config.ts
├── i18n/
│   ├── ui.ts        # languages, htmlLang, per-locale string table
│   └── utils.ts     # getLang, useTranslations, getLocalePath, getDocPath
├── layouts/
│   ├── Layout.astro        # <html> shell: head/SEO, Header, Footer
│   └── MarkdownLayout.astro # Doc frame: title header + <slot/>
├── pages/
│   ├── index.astro            # /            (es home)
│   ├── [slug].astro           # /<slug>      (es docs)
│   ├── 404.astro              # /404.html
│   └── [lang]/
│       ├── index.astro        # /<lang>/     (en/pt/zh home)
│       └── [slug].astro       # /<lang>/<slug> (en/pt/zh docs)
└── styles/          # tokens.css -> ligth.css / dark.css -> global.css
```

## Render flow

- **Home:** `pages/**/index.astro` → `Home.astro` → `Layout` (+ `Hero`, `Problem`,
  `HowItWorks`, `Features`, `Pricing`).
- **Docs:** `pages/**/[slug].astro` → `DocPage.astro` (renders the collection
  entry, derives the language-less `slug`) → `MarkdownLayout` → `Layout`.
- **404:** single prerendered page showing the recovery message in all four
  languages (see `src/pages/404.astro`).

Every visible string comes from `src/i18n/ui.ts` via
`useTranslations(getLang(Astro.url))` — components never hardcode copy.
