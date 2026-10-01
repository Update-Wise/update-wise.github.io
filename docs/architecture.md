# Architecture

Static multilingual site built with [Astro](https://astro.build) (`output: static`).
Four locales: `es` (default, no URL prefix), `en`, `pt`, `zh`.

```text
src/
├── assets/          # SVG icons imported as components
├── components/      # Page sections + glue components
│   ├── Home.astro         # Home composition (used by every locale home)
│   ├── DocPage.astro      # Collection-entry renderer (used by every doc page)
│   ├── Download.astro     # /download page (OS detection + release links)
│   ├── BlogIndex.astro    # /blog listing (reads the blog collection)
│   ├── BlogPost.astro     # /blog/<post> renderer
│   ├── CookieBanner.astro # Consent banner (mounted in Layout)
│   ├── Hero.astro / Ticker.astro / Mascot.astro / Problem.astro / HowItWorks.astro / KeyCapabilities.astro / Pricing.astro
│   ├── Header.astro / Footer.astro
│   └── LanguageSelector.astro  # Keeps slug + query + hash across locales
├── content/         # "pages" collection: <lang>/<slug>.md (privacy, terms, cookies, about, faq, support, status)
│                   # "blog" collection: <lang>/blog/<year>/<slug>.md
├── content.config.ts
├── i18n/
│   ├── ui.ts        # languages, htmlLang, per-locale string table
│   └── utils.ts     # getLang, useTranslations, getLocalePath, getDocPath, getDownloadPath, getBlogPath, getBlogPostPath, localizePath
├── layouts/
│   ├── Layout.astro        # <html> shell: head/SEO, Header, Footer, CookieBanner
│   └── MarkdownLayout.astro # Doc frame: title header + <slot/>
├── pages/
│   ├── index.astro            # /            (es home)
│   ├── download.astro         # /download    (es download)
│   ├── [slug].astro           # /<slug>      (es docs)
│   ├── 404.astro              # /404.html (all locales + JS highlight)
│   ├── blog/
│   │   ├── index.astro        # /blog        (es listing)
│   │   └── [...post].astro    # /blog/<post> (es posts)
│   └── [lang]/
│       ├── index.astro        # /<lang>/     (en/pt/zh home)
│       ├── download.astro     # /<lang>/download
│       ├── [slug].astro       # /<lang>/<slug> (en/pt/zh docs)
│       └── blog/
│           ├── index.astro    # /<lang>/blog
│           └── [...post].astro # /<lang>/blog/<post>
└── styles/          # tokens.css -> light.css / dark.css -> global.css
```

## Render flow

- **Home:** `pages/**/index.astro` → `Home.astro` → `Layout` (+ `Hero`, `Ticker`,
  `Problem`, `HowItWorks`, `KeyCapabilities`, `Pricing`). `Home.astro` also
  owns the client motion: `js-anim` gating, scroll reveals (`data-reveal`) and
  hero counters (`data-count`) — all skipped under reduced motion / saver mode.
- **Download:** `pages/**/download.astro` → `Download.astro` → `Layout`
  (client-side OS detection highlights the matching platform card).
- **Blog:** `pages/**/blog/index.astro` → `BlogIndex.astro` (lists the `blog`
  collection, current locale with `es` fallback); `pages/**/blog/[...post].astro`
  → `BlogPost.astro` → `MarkdownLayout` (published date + back link + TOC).
- **Docs:** `pages/**/[slug].astro` → `DocPage.astro` (renders the collection
  entry, derives the language-less `slug`) → `MarkdownLayout` → `Layout`.
- **404:** single prerendered page showing the recovery message in all four
  languages plus a client-side highlight of the visitor language
  (`navigator.language`, see `src/pages/404.astro`).

Every visible string comes from `src/i18n/ui.ts` via
`useTranslations(getLang(Astro.url))` — components never hardcode copy.
