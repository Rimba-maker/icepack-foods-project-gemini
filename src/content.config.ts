import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resep = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resep" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    mainIngredient: z.string(),
    categoryColor: z.string().default("bg-canvas-soft"),
    categoryText: z.string().default("text-ink"),
  }),
});

export const collections = { resep };
