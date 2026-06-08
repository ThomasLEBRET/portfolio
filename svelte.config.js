import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: ['.md'] })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      strict: true
    }),
    prerender: {
      handleHttpError: ({ path, message }) => {
        // Static assets from public/ are not routes — ignore their 404s
        if (/\.(svg|ico|png|jpg|webp|woff2?|txt|xml)$/.test(path)) return;
        throw new Error(message);
      }
    }
  }
};

export default config;
