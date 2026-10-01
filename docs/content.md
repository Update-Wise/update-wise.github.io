# Content collections

## `pages`

Defined in `src/content.config.ts`, loaded from `src/content/<lang>/<slug>.md`.
Entry ids look like `es/privacy` (no extension) — the `[slug]` routes rely on
that shape when stripping the language prefix.

## Frontmatter schema

```yaml
title: Política de Privacidad # required
description: ... # required-ish (feeds meta description)
eyebrow: Privacidad # optional kicker above the title
updatedAt: 2026-10-01 # optional, shown under the title
```

One quirk is handled in code, not by convention:

- **Unquoted dates:** YAML parses `updatedAt: 2026-10-01` as a `Date`, so the
  schema uses `z.coerce.string()`.

## Adding a doc page

1. Create `src/content/es/<slug>.md` (fallback source) plus one file per
   translated locale, same slug.
2. Link it via `getDocPath(lang, "<slug>")` so URLs stay locale-correct.
3. Rebuild — routes, hreflang, and sitemap update automatically.

## `blog`

Loaded from `src/content/<lang>/blog/<year>/<slug>.md`. Entry ids look like
`es/blog/2026/welcome` (no extension).

### Frontmatter schema

```yaml
title: Bienvenidos al blog de Update Wise # required
description: ... # required-ish (feeds meta description)
pubDate: 2026-10-01 # required, shown as the publish date
```

### Adding a post

1. Create `src/content/es/blog/<year>/<slug>.md` plus one file per translated
   locale, same path. Non-default post routes fall back to the `es` entry.
2. Link the index with `getBlogPath(lang)` and posts with
   `getBlogPostPath(lang, "<year>/<slug>")`.
3. Rebuild — listing, routes, hreflang, and sitemap update automatically.

## Table of contents

`DocPage.astro` forwards `headings` from `render(entry)` to
`MarkdownLayout.astro`, which renders `h2`-`h4` as a nested tree menu in a
sticky right sidebar (stacked above the content on mobile). The `h1` is
skipped — the page header already renders the title. A small
`IntersectionObserver` script highlights the section in view.
