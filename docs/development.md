# Development

```sh
npm install        # install dependencies
npm run dev        # start dev server at localhost:4321
npm run build      # static build to dist/ (also validates i18n + content)
npm run preview    # preview the production build
```

Per `AGENTS.md`, run the dev server in background mode (`astro dev
--background`) and manage it with `astro dev stop` / `status` / `logs`.

## Conventions

- **Styling is component-scoped** (`<style>` inside each `.astro` file);
  `src/styles/` only holds theme tokens. Don't restyle when changing behavior.
- **No hardcoded copy** — every visible string goes through `ui.ts` +
  `useTranslations`.
- **Comments: only what's necessary.** Comment the *why* (routing outcomes,
  non-obvious derivations like the collection id shape, legacy quirks,
  pending TODOs) — never the *what*. No file-path headers, no decorative
  banners, no labels that restate variable names. Keep them in English.
- **Docs over comments:** if an explanation needs more than two lines, it
  belongs in `docs/`, with the code pointing at it.
