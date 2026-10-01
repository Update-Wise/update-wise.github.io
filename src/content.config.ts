import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Entry ids look like "es/privacy" (no extension)
const pages = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    // Unquoted YAML dates parse as Date objects, so coerce to string
    updatedAt: z.coerce.string().optional(),
  }),
});

// Entry ids look like "es/blog/2026/welcome" (no extension)
const blog = defineCollection({
  loader: glob({ pattern: "*/blog/**/*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Unquoted YAML dates parse as Date objects, so coerce to string
    pubDate: z.coerce.string(),
  }),
});

export const collections = { pages, blog };
