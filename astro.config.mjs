import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mermaid from "astro-mermaid";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mermaid()
  ]
});