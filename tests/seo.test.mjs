import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const read = (p) => readFileSync(join(dist, p), "utf8");

describe("SEO output (dist/)", () => {
  it("home pages exist for every locale", () => {
    for (const p of [
      "index.html",
      "en/index.html",
      "pt/index.html",
      "zh/index.html",
    ]) {
      assert.ok(existsSync(join(dist, p)), `missing dist/${p}`);
    }
  });

  it("download pages exist for every locale", () => {
    for (const p of [
      "download/index.html",
      "en/download/index.html",
      "pt/download/index.html",
      "zh/download/index.html",
    ]) {
      assert.ok(existsSync(join(dist, p)), `missing dist/${p}`);
    }
  });

  it("doc pages exist for every locale", () => {
    for (const slug of [
      "privacy",
      "terms",
      "cookies",
      "about",
      "faq",
      "support",
      "status",
    ]) {
      for (const p of [
        `${slug}/index.html`,
        `en/${slug}/index.html`,
        `pt/${slug}/index.html`,
        `zh/${slug}/index.html`,
      ]) {
        assert.ok(existsSync(join(dist, p)), `missing dist/${p}`);
      }
    }
  });

  it("blog index and posts exist for every locale", () => {
    for (const p of [
      "blog/index.html",
      "en/blog/index.html",
      "pt/blog/index.html",
      "zh/blog/index.html",
      "blog/2026/welcome/index.html",
      "en/blog/2026/welcome/index.html",
      "pt/blog/2026/welcome/index.html",
      "zh/blog/2026/welcome/index.html",
    ]) {
      assert.ok(existsSync(join(dist, p)), `missing dist/${p}`);
    }
  });

  it("home has canonical + hreflang + OG + twitter", () => {
    const html = read("index.html");
    assert.match(
      html,
      /<link rel="canonical"[^>]*href="[^"]+"/,
      "canonical missing",
    );
    assert.match(html, /hreflang="es"/, "hreflang es missing");
    assert.match(html, /hreflang="en"/, "hreflang en missing");
    assert.match(html, /hreflang="pt-BR"/, "hreflang pt-BR missing");
    assert.match(html, /hreflang="zh-CN"/, "hreflang zh-CN missing");
    assert.match(html, /hreflang="x-default"/, "x-default missing");
    assert.match(html, /<meta name="description"/, "meta description missing");
    assert.match(html, /og:title/, "og:title missing");
    assert.match(html, /og:description/, "og:description missing");
    assert.match(html, /twitter:card/, "twitter card missing");
  });

  it("download pages carry their own canonical + hreflang slug set", () => {
    const html = read("download/index.html");
    assert.match(
      html,
      /\/download\/?"/,
      "download canonical should contain /download",
    );
    assert.match(
      html,
      /hreflang="en"[^>]*\/en\/download/,
      "en hreflang should point to /en/download",
    );
  });

  it("blog post carries back-link, published label and hreflang", () => {
    const html = read("blog/2026/welcome/index.html");
    assert.match(html, /markdown-back/, "post must link back to the blog");
    assert.match(html, /Publicado:/, "es post should show Publicado");
    assert.match(
      html,
      /hreflang="en"[^>]*\/en\/blog\/2026\/welcome/,
      "en hreflang should point to /en/blog/2026/welcome",
    );
    const en = read("en/blog/2026/welcome/index.html");
    assert.match(en, /Published:/, "en post should show Published");
  });

  it("sitemap lists homes, docs, blog and download, excludes 404", () => {
    const sitemap = read("sitemap-index.xml");
    assert.match(sitemap, /sitemap/, "sitemap index malformed");
    const inner = read("sitemap-0.xml");
    for (const needle of [
      "privacy",
      "terms",
      "cookies",
      "about",
      "faq",
      "support",
      "status",
      "blog",
      "download",
    ]) {
      assert.match(inner, new RegExp(needle), `sitemap missing ${needle}`);
    }
    assert.doesNotMatch(inner, /404/, "sitemap must exclude 404");
  });

  it("robots references the sitemap", () => {
    // robots.txt is copied to dist/ on build
    const p = existsSync(join(dist, "robots.txt"))
      ? join(dist, "robots.txt")
      : join(root, "public", "robots.txt");
    const raw = readFileSync(p, "utf8");
    assert.match(
      raw,
      /Sitemap: .*sitemap-index\.xml/,
      "robots must reference sitemap",
    );
  });

  it("localized updated label is rendered (no hardcoded Spanish)", () => {
    const es = read("privacy/index.html");
    const en = read("en/privacy/index.html");
    assert.match(es, /Actualizado:/, "es doc should show Actualizado");
    assert.match(en, /Updated:/, "en doc should show Updated, not Actualizado");
    assert.doesNotMatch(en, /Actualizado:/, "en doc leaks Spanish label");
  });
});
