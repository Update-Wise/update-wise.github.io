import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const src = (p) => readFileSync(join(root, p), "utf8");

describe("site functionality", () => {
  it("landing is animated: ticker, reveals and counters", () => {
    assert.ok(
      existsSync(join(root, "src", "components", "Ticker.astro")),
      "Ticker.astro missing",
    );
    const home = src("src/components/Home.astro");
    assert.match(home, /Ticker/, "Home must render Ticker");
    assert.match(home, /js-anim/, "Home must gate animations on js-anim");
    assert.match(
      home,
      /prefers-reduced-motion/,
      "Home must respect reduced motion",
    );
    assert.match(home, /data-count/, "Home must animate hero counters");
    for (const f of [
      "src/components/Hero.astro",
      "src/components/Ticker.astro",
    ]) {
      assert.match(
        src(f),
        /html\.js-anim/,
        `${f} must scope motion to js-anim`,
      );
    }
    const built = readFileSync(join(dist, "index.html"), "utf8");
    assert.match(built, /ticker-track/, "built home must contain the ticker");
    assert.match(built, /hero-badge/, "built home must contain hero badge");
    assert.match(built, /hero-stats/, "built home must contain hero stats");
    assert.match(built, /data-reveal/, "built home must contain reveals");
  });

  it("reduced motion and saver mode degrade gracefully", () => {
    const css = src("src/styles/global.css");
    assert.match(
      css,
      /prefers-reduced-motion: reduce/,
      "global CSS must handle reduced motion",
    );
    assert.match(
      css,
      /data-saver="on"/,
      "global CSS must define the saver overrides",
    );
    const layout = src("src/layouts/Layout.astro");
    assert.match(layout, /uw-saver/, "Layout must persist saver choice");
    assert.match(layout, /saveData/, "Layout must detect Save-Data");
    assert.match(
      layout,
      /effectiveType/,
      "Layout must detect slow effective types",
    );
    assert.match(
      layout,
      /dataset\.saver/,
      "Layout must expose data-saver on <html>",
    );
    const header = src("src/components/Header.astro");
    assert.match(header, /saver-toggle/, "Header must have a saver toggle");
    assert.match(header, /aria-pressed/, "saver toggle must expose its state");
    const built = readFileSync(join(dist, "index.html"), "utf8");
    assert.match(
      built,
      /saver-toggle/,
      "built home must contain the saver toggle",
    );
  });

  it("theme tokens stay typo-free in both themes", () => {
    for (const theme of ["light.css", "dark.css"]) {
      const raw = src(`src/styles/${theme}`);
      for (const token of [
        "color-glow",
        "color-glass",
        "gradient-brand",
        "gradient-surface",
        "gradient-hero-wash",
      ]) {
        assert.match(raw, new RegExp(token), `${theme} misses ${token}`);
      }
    }
    assert.doesNotMatch(
      src("src/styles/dark.css"),
      /:\s*:/,
      "dark.css must not contain double colons",
    );
  });

  it("mascot reacts to the mouse and degrades gracefully", () => {
    assert.ok(
      existsSync(join(root, "src", "components", "Mascot.astro")),
      "Mascot.astro missing",
    );
    const mascot = src("src/components/Mascot.astro");
    assert.match(mascot, /TODO\(brand\)/, "mascot must flag the PNG swap");
    for (const hook of [
      "data-mascot-tilt",
      "data-mascot-pupil",
      "pointermove",
      "pointerdown",
    ]) {
      assert.match(mascot, new RegExp(hook), `mascot misses ${hook}`);
    }
    assert.match(
      mascot,
      /prefers-reduced-motion/,
      "mascot must respect reduced motion",
    );
    assert.match(
      mascot,
      /dataset\.saver/,
      "mascot must stand down in saver mode",
    );
    const hero = src("src/components/Hero.astro");
    assert.match(hero, /Mascot/, "Hero must render the mascot");
    const built = readFileSync(join(dist, "index.html"), "utf8");
    assert.match(built, /data-mascot/, "built home must contain the mascot");
  });

  it("cookie banner is mounted in Layout with consent storage", () => {
    assert.ok(
      existsSync(join(root, "src", "components", "CookieBanner.astro")),
      "CookieBanner.astro missing",
    );
    const layout = src("src/layouts/Layout.astro");
    assert.match(layout, /CookieBanner/, "Layout must render CookieBanner");
    const banner = src("src/components/CookieBanner.astro");
    assert.match(
      banner,
      /cookie-consent/,
      "banner must use cookie-consent key",
    );
    assert.match(banner, /cookie-accept/, "banner needs accept button");
    assert.match(banner, /cookie-decline/, "banner needs decline button");
    const home = readFileSync(join(dist, "index.html"), "utf8");
    assert.match(home, /cookie-banner/, "built home must contain the banner");
  });

  it("download page detects the OS and lists all platforms", () => {
    assert.ok(
      existsSync(join(root, "src", "components", "Download.astro")),
      "Download.astro missing",
    );
    const dl = src("src/components/Download.astro");
    assert.match(dl, /detectOS|userAgentData/, "OS detection missing");
    assert.match(dl, /data-os="windows"/, "windows card missing");
    assert.match(dl, /data-os="linux"/, "linux card missing");
    assert.match(dl, /data-os="macos"/, "macos card missing");
    assert.match(dl, /releases/, "placeholder release links missing");
    const built = readFileSync(join(dist, "download", "index.html"), "utf8");
    assert.match(
      built,
      /download-recommended/,
      "built page must have recommended slot",
    );
  });

  it("CTAs point to the real download page, not a dead #download anchor", () => {
    for (const f of [
      "Header.astro",
      "Hero.astro",
      "Footer.astro",
      "Pricing.astro",
    ]) {
      const raw = src(`src/components/${f}`);
      assert.doesNotMatch(
        raw,
        /href="#download"/,
        `${f} still links to #download`,
      );
    }
    const header = src("src/components/Header.astro");
    assert.match(header, /getDownloadPath/, "Header must use getDownloadPath");
  });

  it("header, footer and pricing link to real pages, not dead anchors", () => {
    const header = src("src/components/Header.astro");
    const footer = src("src/components/Footer.astro");
    const pricing = src("src/components/Pricing.astro");
    for (const [name, raw] of [
      ["Header", header],
      ["Footer", footer],
      ["Pricing", pricing],
    ]) {
      for (const dead of [
        "#about",
        "#contact",
        "#blog",
        "#help",
        "#faq",
        "#status",
        "#features",
      ]) {
        assert.doesNotMatch(
          raw,
          new RegExp(`href="${dead}"`),
          `${name} still links to dead ${dead}`,
        );
      }
    }
    assert.match(
      header,
      /getDocPath\(lang, "about"\)/,
      "Header about must link to /about",
    );
    assert.match(
      footer,
      /getBlogPath\(lang\)/,
      "Footer blog must link to /blog",
    );
    for (const slug of ["about", "support", "faq", "status"]) {
      assert.match(
        footer,
        new RegExp(`getDocPath\\(lang, "${slug}"\\)`),
        `Footer must link to /${slug}`,
      );
    }
  });

  it("blog index lists posts and links to them", () => {
    const index = src("src/components/BlogIndex.astro");
    assert.match(index, /getCollection\("blog"\)/, "index must read the blog");
    assert.match(index, /getBlogPostPath/, "index must link to posts");
    const built = readFileSync(join(dist, "blog", "index.html"), "utf8");
    assert.match(built, /2026\/welcome/, "built index must list the post");
  });

  it("footer features link targets the real section id", () => {
    const footer = src("src/components/Footer.astro");
    assert.match(
      footer,
      /#key-capabilities/,
      "footer must link to #key-capabilities",
    );
    assert.doesNotMatch(
      footer,
      /href="#features"/,
      "stale #features anchor remains",
    );
  });

  it("language selector keeps the current page (slug + hash)", () => {
    const sel = src("src/components/LanguageSelector.astro");
    assert.match(
      sel,
      /stripPrefix|localizePath|window\.location\.pathname/,
      "selector must remap pathname",
    );
    assert.match(
      sel,
      /window\.location\.search/,
      "selector must preserve query",
    );
    assert.match(sel, /window\.location\.hash/, "selector must preserve hash");
    assert.doesNotMatch(
      sel,
      /getLocalePath\(code\)/,
      "selector must not jump straight home",
    );
  });

  it("404 highlights the visitor language via script", () => {
    const page = src("src/pages/404.astro");
    assert.match(
      page,
      /navigator\.language/,
      "404 must read navigator.language",
    );
    assert.match(page, /not-found-suggestion/, "404 suggestion slot missing");
    assert.match(
      page,
      /not-found-card--suggested/,
      "404 highlight class missing",
    );
  });

  it("doc pages render a tree-style table of contents", () => {
    const layout = readFileSync(
      join(root, "src", "layouts", "MarkdownLayout.astro"),
      "utf8",
    );
    assert.match(layout, /toc-tree/, "TOC tree markup missing");
    assert.match(layout, /data-toc-link/, "TOC anchor links missing");
    const doc = src("src/components/DocPage.astro");
    assert.match(doc, /headings/, "DocPage must pass headings to the layout");
    const built = readFileSync(join(dist, "privacy", "index.html"), "utf8");
    assert.match(built, /toc-tree/, "built doc must contain the TOC");
    assert.match(
      built,
      /href="#[^"]+"/,
      "built doc must link to heading anchors",
    );
  });

  it("doc pages carry non-invasive reading details", () => {
    const layout = readFileSync(
      join(root, "src", "layouts", "MarkdownLayout.astro"),
      "utf8",
    );
    for (const detail of [
      "read-progress",
      "heading-anchor",
      "markdown-header::after",
      "::marker",
      ":global(table)",
      ":global(hr)",
      ":global(figcaption)",
    ]) {
      assert.match(
        layout,
        new RegExp(detail.replace(/([():])/g, "\\$1")),
        `MarkdownLayout misses ${detail}`,
      );
    }
    assert.match(
      src("src/styles/global.css"),
      /::selection/,
      "global CSS must tint text selection",
    );
    const built = readFileSync(join(dist, "privacy", "index.html"), "utf8");
    assert.match(
      built,
      /data-read-progress/,
      "built doc must contain the progress bar",
    );
  });

  it("codebase is typo-free and English-only", () => {
    const all = [
      "src/styles/global.css",
      "src/styles/light.css",
      "src/styles/dark.css",
      "src/components/Hero.astro",
      "src/components/Pricing.astro",
      "src/layouts/MarkdownLayout.astro",
    ]
      .map(src)
      .join("\n");
    for (const bad of ["ligth", "ligther", "highligth", "darkend", "sucess"]) {
      assert.doesNotMatch(all, new RegExp(bad), `typo ${bad} remains`);
    }
    assert.ok(
      existsSync(join(root, "src", "styles", "light.css")),
      "light.css missing",
    );
    assert.ok(
      !existsSync(join(root, "src", "styles", "ligth.css")),
      "old ligth.css remains",
    );
    for (const f of [
      "HowItWorks.astro",
      "Problem.astro",
      "KeyCapabilities.astro",
      "LanguageSelector.astro",
    ]) {
      assert.ok(
        existsSync(join(root, "src", "components", f)),
        `${f} missing after rename`,
      );
    }
    const robots = src("public/robots.txt");
    assert.doesNotMatch(
      robots,
      /actualizar el dominio/,
      "robots comment must be in English",
    );
  });
});
