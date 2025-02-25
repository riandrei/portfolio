// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/experience" }),
});
const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/skills" }),
});
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { experience, skills, projects };
