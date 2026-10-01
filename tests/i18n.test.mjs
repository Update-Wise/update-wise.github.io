import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const requiredKeys = [
  "doc.updated",
  "doc.toc",
  "cookie.text",
  "cookie.accept",
  "cookie.decline",
  "cookie.policy",
  "download.eyebrow",
  "download.title",
  "download.subtitle",
  "download.recommended",
  "download.other",
  "download.windows",
  "download.linux",
  "download.macos",
  "download.cta",
  "download.note",
  "download.version",
  "download.detected",
  "download.unknown",
  "download.soon",
  "blog.eyebrow",
  "blog.title",
  "blog.subtitle",
  "blog.read",
  "blog.back",
  "blog.published",
  "blog.empty",
  "hero.badge",
  "hero.note",
  "hero.stat1",
  "hero.stat2",
  "hero.stat3",
  "saver.toggle",
  "saver.enable",
  "saver.disable",
  "notfound.suggestion",
  "seo.title",
  "seo.description",
  "seo.ogAlt",
];

function keysByLocale(source) {
  const uiSection = source.slice(source.indexOf("export const ui"));
  const markers = ["es:", "en:", "pt:", "zh:"].map((m) => {
    const idx = uiSection.indexOf(`\n  ${m}`);
    assert.ok(idx !== -1, `locale block ${m} not found`);
    return idx;
  });
  const keyRe = /"([^"]+)":/g;
  const out = { es: new Set(), en: new Set(), pt: new Set(), zh: new Set() };
  const names = ["es", "en", "pt", "zh"];
  let match;
  while ((match = keyRe.exec(uiSection)) !== null) {
    const pos = match.index;
    let locale = "es";
    for (let i = 0; i < markers.length; i++) {
      if (pos > markers[i]) locale = names[i];
    }
    out[locale].add(match[1]);
  }
  return out;
}

describe("i18n string table", () => {
  const source = readFileSync(join(root, "src", "i18n", "ui.ts"), "utf8");
  const byLocale = keysByLocale(source);

  it("all locales expose the same key set as es (UIKey parity)", () => {
    const base = [...byLocale.es].sort();
    assert.ok(base.length > 50, "es table looks too small");
    for (const locale of ["en", "pt", "zh"]) {
      assert.deepEqual(
        [...byLocale[locale]].sort(),
        base,
        `key mismatch in ${locale}`,
      );
    }
  });

  it("required doc/cookie/download/notfound keys exist everywhere", () => {
    for (const key of requiredKeys) {
      for (const locale of ["es", "en", "pt", "zh"]) {
        assert.ok(byLocale[locale].has(key), `missing ${key} in ${locale}`);
      }
    }
  });

  it("no leftover hero.title dead key", () => {
    // hero.title was superseded by hero.title1/title2
    assert.ok(
      !byLocale.es.has("hero.title"),
      "dead hero.title key still present",
    );
  });

  it("utils expose download + blog + localize helpers", () => {
    const utils = readFileSync(join(root, "src", "i18n", "utils.ts"), "utf8");
    for (const fn of [
      "getDownloadPath",
      "getBlogPath",
      "getBlogPostPath",
      "localizePath",
      "stripLocalePrefix",
      "getDocPath",
      "getLocalePath",
      "getLang",
    ]) {
      assert.match(utils, new RegExp(`function ${fn}`), `${fn} missing`);
    }
  });
});
