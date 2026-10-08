import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    fullDescription: z.string(),
    problem: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(99),
    status: z.string(),
    date: z.coerce.date().optional(),
    githubUrl: z.url().optional(),
    reportUrl: z
      .string()
      .regex(/^\/reports\/[^/]+\/$/)
      .optional(),
    liveDemoUrl: z.url().optional(),
    downloads: z
      .array(
        z.object({
          label: z.string(),
          path: z
            .string()
            .regex(
              /^\/downloads\/.+\.pbix$/i,
              'Use a local /downloads/filename.pbix path.',
            ),
          size: z.string(),
        }),
      )
      .default([]),
    technologies: z.array(z.string()),
    category: z.string(),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          width: z.number().positive(),
          height: z.number().positive(),
        }),
      )
      .default([]),
    keyFeatures: z.array(z.string()).default([]),
    challenges: z.array(z.string()).default([]),
    architecture: z
      .array(z.object({ name: z.string(), detail: z.string() }))
      .default([]),
    architectureNote: z.string().optional(),
    designDecisions: z
      .array(z.object({ title: z.string(), description: z.string() }))
      .default([]),
    reportingOutcome: z.string().optional(),
    lessonsLearned: z.array(z.string()).default([]),
  }),
});
export const collections = { projects };
