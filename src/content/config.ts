import { defineCollection, z } from 'astro:content';

// 1. Collection CV (JSON) -> Type 'data'
const cvCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    basics: z.any(),
    work: z.array(z.any()),
    education: z.array(z.any()),
    skills: z.array(z.any()),
    volunteering: z.any().optional(), // Ajouté car présent dans ton index
    contact: z.any().optional(),
    role: z.string().optional(),
    about: z.string().optional(),
    location: z.string().optional(),
    experience: z.array(z.any()).optional(),
  }),
});

// 2. Collection Blog (Markdown) -> Type 'content' (INDISPENSABLE pour le slug)
const blogCollection = defineCollection({
  type: 'content', // <--- C'est cette ligne qui répare l'erreur "slug does not exist"
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // z.coerce.date() transforme n'importe quelle string de date en Objet Date JS
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

// 3. Export
export const collections = {
  'cv': cvCollection,
  'blog': blogCollection,
};