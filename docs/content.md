# Content (`pages` collection)

Defined in `src/content.config.ts`, loaded from `src/content/<lang>/<slug>.md`.
Entry ids look like `es/privacy` (no extension) — the `[slug]` routes rely on
that shape when stripping the language prefix.

## Frontmatter schema

```yaml
title: Política de Privacidad   # required
description: ...                # required-ish (feeds meta description)
eyebrow: Privacidad             # optional kicker above the title
updatedAt: 2026-10-01           # optional, shown under the title
```

Two quirks are handled in code, not by convention:

- **Unquoted dates:** YAML parses `updatedAt: 2026-10-01` as a `Date`, so the
  schema uses `z.coerce.string()`.
- **Legacy `updateAt` key** (missing "d") in the original `.md` files: accepted
  by the schema and normalized in `DocPage.astro`. Use `updatedAt` in new files.

## Adding a doc page

1. Create `src/content/es/<slug>.md` (fallback source) plus one file per
   translated locale, same slug.
2. Link it via `getDocPath(lang, "<slug>")` so URLs stay locale-correct.
3. Rebuild — routes, hreflang, and sitemap update automatically.
