import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "src", "content");

describe("content collection", () => {
  const langs = ["es", "en", "pt", "zh"];
  const slugs = [
    "privacy",
    "terms",
    "cookies",
    "about",
    "faq",
    "support",
    "status",
  ];

  for (const lang of langs) {
    for (const slug of slugs) {
      it(`${lang}/${slug}.md exists with valid frontmatter`, () => {
        const p = join(contentDir, lang, `${slug}.md`);
        assert.ok(existsSync(p), `missing ${lang}/${slug}.md`);
        const raw = readFileSync(p, "utf8");
        assert.match(
          raw,
          /^---\ntitle: .+\n/,
          "frontmatter must start with title",
        );
        assert.match(
          raw,
          /description: .+/,
          "frontmatter must have description",
        );
        assert.match(
          raw,
          /updatedAt: \d{4}-\d{2}-\d{2}/,
          "frontmatter must have updatedAt",
        );
        assert.doesNotMatch(
          raw,
          /(?<!d)updateAt:/,
          "legacy updateAt key must not appear",
        );
      });
    }
  }

  for (const lang of langs) {
    it(`${lang}/blog/2026/welcome.md exists with pubDate`, () => {
      const p = join(contentDir, lang, "blog", "2026", "welcome.md");
      assert.ok(existsSync(p), `missing ${lang}/blog/2026/welcome.md`);
      const raw = readFileSync(p, "utf8");
      assert.match(raw, /^---\ntitle: .+\n/, "post must start with title");
      assert.match(raw, /description: .+/, "post must have description");
      assert.match(raw, /pubDate: \d{4}-\d{2}-\d{2}/, "post must have pubDate");
    });
  }

  const walk = (dir) => {
    const out = [];
    for (const name of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, name.name);
      if (name.isDirectory()) out.push(...walk(p));
      else if (name.name.endsWith(".md")) out.push(readFileSync(p, "utf8"));
    }
    return out;
  };

  it("no legacy updateAt key anywhere in src/content", () => {
    for (const raw of walk(contentDir)) {
      assert.doesNotMatch(raw, /(^|\n)updateAt:/, "legacy key found");
    }
  });

  it("no unquoted colon-space in frontmatter values", () => {
    for (const raw of walk(contentDir)) {
      const fm = raw.split("---")[1] ?? "";
      for (const line of fm.split("\n")) {
        const m = line.match(/^(title|description|eyebrow):\s*(.*)$/);
        if (!m) continue;
        const v = m[2].trim();
        const unquoted = !(
          (v.startsWith('"') && v.endsWith('"')) ||
          (v.startsWith("'") && v.endsWith("'"))
        );
        assert.ok(
          !(unquoted && v.includes(": ")),
          `unquoted ": " breaks YAML: ${line.slice(0, 80)}`,
        );
      }
    }
  });

  it("content.config has no legacy updateAt in schema", () => {
    const raw = readFileSync(join(root, "src", "content.config.ts"), "utf8");
    assert.doesNotMatch(raw, /updateAt/, "schema still mentions legacy key");
    assert.match(raw, /updatedAt/, "schema must keep updatedAt");
  });

  it("content.config defines the blog collection", () => {
    const raw = readFileSync(join(root, "src", "content.config.ts"), "utf8");
    assert.match(
      raw,
      /const blog = defineCollection/,
      "blog collection missing",
    );
    assert.match(raw, /pubDate/, "blog schema must require pubDate");
    assert.match(
      raw,
      /collections = \{ pages, blog \}/,
      "blog must be exported",
    );
  });
});
