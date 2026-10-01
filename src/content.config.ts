import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Entry ids look like "es/privacy" (no extension)
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    // Unquoted YAML dates parse as Date objects, so coerce to string
    updatedAt: z.coerce.string().optional(),
    // Legacy key used by the original .md files (missing "d")
    updateAt: z.coerce.string().optional(),
  }),
});

export const collections = { pages };
