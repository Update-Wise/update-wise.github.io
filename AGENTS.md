## Development

Run the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Scripts

| Script         | Command                                                                    | Purpose                               |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------- |
| `npm run dev`  | `astro dev`                                                                | Local dev server (add `--background`) |
| `npm run build`| `astro build`                                                              | Static build to `dist/`               |
| `npm run check`| `astro check`                                                              | Type + Astro diagnostics (0 errors)   |
| `npm run lint` | `prettier --check .`                                                       | Code style check                      |
| `npm run format`| `prettier --write .`                                                      | Fix code style                        |
| `npm test`     | `astro build && node --test tests/*.test.mjs`                              | Build + content/i18n/SEO/functional tests |

Run `npm run format` before committing. `npm test` must stay green (65 tests:
content, i18n, SEO, functional).

## Conventions

- **Single branch:** `main` only. Keep the working tree rebased on `origin/main`
  (`git fetch --prune origin`). No `master`, no long-lived branches.
- **English code:** component/file names, variables, comments, and commit
  messages in English. User-facing copy lives in `src/i18n/ui.ts` (es/en/pt/zh).
- **No typos in tokens:** theme file is `src/styles/light.css` (not `ligth`).
  CSS vars use `lighter`, `highlight`, `darkened`, `success`.
- **Components (English names):** `Hero`, `Ticker`, `Mascot`, `Problem`, `HowItWorks`,
  `KeyCapabilities`, `Pricing`, `Download`, `BlogIndex`, `BlogPost`,
  `CookieBanner`, `LanguageSelector`,
  `DocPage`. `Home.astro` composes the landing; `Download.astro` owns
  `/download` (OS detection + placeholder release links); `BlogIndex` /
  `BlogPost` own `/blog` and `/blog/<post>` (blog collection + `es` fallback).
- **No hardcoded copy** — every visible string goes through `ui.ts` +
  `useTranslations` (including `doc.updated`, `blog.*`, cookie banner, download page).
- **Routing:** default locale `es` has no prefix (`/download`), others use
  `/<lang>/download`. Link with `getDocPath` / `getDownloadPath` /
  `getBlogPath` / `getBlogPostPath` /
  `localizePath`, never raw `#download` anchors.
- **Comments: only what's necessary**, in English. Complex explanations belong
  in `docs/`, not inline.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
