# TODO — remaining work (brand vs code)

> Batch done Oct 2026: cookie banner, `updatedAt` normalization, localized
> `doc.updated`, `/download` with OS detection, slug-preserving language
> switch, JS-assisted 404, typo/English cleanup, `lint`/`format`/`check`/`test`
> (33 green), single `main` branch, aligned `AGENTS.md` + `docs/`.
> Batch 2: `/about`, `/faq`, `/support`, `/status` in es/en/pt/zh, `blog`
> collection + `/blog` index + `/blog/2026/welcome` post in 4 locales,
> header/footer/pricing wired to real pages, tests at 60 green.
> Everything below is still open.

## BRAND — content, product and identity

- [ ] **Final domain:** replace `https://updatewise.example.com` in
      `astro.config.mjs` (`site`) and `public/robots.txt` (`Sitemap:`).
      Canonicals, hreflang and sitemap derive from it.
- [ ] **Artwork:** real `og:image` 1200x630 + `twitter:image`, wire
      `seo.ogAlt` into `Layout.astro` (`og:image:alt`), add
      `apple-touch-icon` + web manifest.
- [ ] **Logo:** replace the gray `#HeroLogo` placeholder div in
      `Header.astro` with the real brand mark (SVG, light/dark variants).
- [ ] **Mascot PNG:** `Mascot.astro` is an interactive placeholder box
      (`TODO(brand)` in the file). Drop in the final mascot PNG — tilt,
      parallax and squash live on the wrapper and keep working.
- [ ] **Hero image:** confirm whether `public/images/landing/app-mock.jpg`
      is final; otherwise add real app screenshots per theme/locale.
- [ ] **Real binaries:** `Download.astro` currently links every platform to
      `.../releases/latest` (placeholder). Publish Windows `.exe`, Linux
      `.AppImage`, macOS `.dmg`, then add per-OS URLs, real version, sizes and
      SHA-256 hashes.
- [ ] **Pricing:** define real prices, currency per locale, billing period and
      destinations (checkout / contact sales). The `team` plan now points to
      `/support` as a placeholder destination.
- [ ] **Contact page:** `Contact` links resolve to `/support` for now. Decide
      whether a dedicated contact page/form is needed or keep support as the
      single contact surface.
- [ ] **Blog growth:** only the `welcome` post exists. Publish cadence,
      authors/tags, RSS feed (`/blog/rss.xml`), and post previews for social.
- [ ] **Social links:** Footer `X` and `Discord` point to `"#"`.
      Add real URLs (and a real X icon instead of the `𝕏` glyph).
- [ ] **Legal contact:** `privacy/terms/cookies` say "contact channels on the
      website" but no email or form exists. Add the real support/legal address.
- [ ] **Analytics:** undecided (privacy implications + cookie consent already
      in place). If added, document it in the cookie policy first.

## CODE — engineering leftovers

- [ ] **SEO advanced:** JSON-LD (`SoftwareApplication` / `WebSite`),
      `og:image:alt`, per-locale `og:locale` checks in CI, sitemap ping on deploy.
- [ ] **Accessibility:** skip-to-content link, global `:focus-visible` styles,
      contrast audit, full `prefers-reduced-motion` coverage, axe test in CI.
- [ ] **i18n polish:** `LanguageSelector` script hardcodes `["en","pt","zh"]`
      — derive from `localeList`; localize the `404` title; format `updatedAt`
      with `Intl.DateTimeFormat` per locale instead of raw ISO.
- [ ] **Dead anchors:** `#download` / `#features` are guarded by
      `tests/functional.test.mjs`, plus `#about` / `#contact` / `#blog` /
      `#help` / `#faq` / `#status` across Header/Footer/Pricing. Keep the
      guards green when touching navigation.
- [ ] **Performance:** adopt `astro:image` for hero/screenshots, preload
      `Inter`, audit font/display and lazy-loading budgets.
- [ ] **CI:** GitHub Actions running `npm run lint && npm run check &&
npm test` on PRs, plus preview deploys and `main` branch protection.
- [ ] **Zod deprecation:** `astro check` reports `z` as deprecated
      (`src/content.config.ts`, hints only). Migrate the import when Astro
      documents the replacement.
- [ ] **E2E tests:** add Playwright coverage for cookie accept/decline
      persistence, download OS recommendation (mocked `userAgentData`), language
      switch slug preservation, and 404 suggestion.
