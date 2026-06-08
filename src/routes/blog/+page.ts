import type { PageLoad } from './$types';

interface PostMetadata {
  title: string;
  description: string;
  pubDate: string;
  tags: string[];
}

interface PostModule {
  metadata: PostMetadata;
}

export const load: PageLoad = () => {
  const modules = import.meta.glob<PostModule>('/src/routes/blog/*/+page.md', { eager: true });

  const articles = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').at(-2)!;
    return { slug, ...mod.metadata };
  });

  articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return { articles };
};
