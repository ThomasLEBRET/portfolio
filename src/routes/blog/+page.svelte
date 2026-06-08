<script lang="ts">
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props();

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>Blog — Thomas Lebret</title>
  <meta name="description" content="Articles DevOps, CI/CD et infrastructure." />
</svelte:head>

<main class="max-w-3xl mx-auto px-6 py-12">
  <header class="mb-10">
    <h1 class="text-3xl font-bold text-white mb-2">Blog</h1>
    <p class="text-gray-400 text-sm">DevOps, CI/CD, infrastructure.</p>
  </header>

  <div class="space-y-8">
    {#each data.articles as article (article.slug)}
      <article class="border-b border-gray-800 pb-8">
        <a href="/blog/{article.slug}" class="group">
          <time class="text-xs font-mono text-gray-500" datetime={article.pubDate}>
            {formatDate(article.pubDate)}
          </time>
          <h2 class="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-green-400 transition-colors">
            {article.title}
          </h2>
          <p class="text-sm text-gray-400 mb-3">{article.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each article.tags as tag (tag)}
              <span class="px-2 py-0.5 text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400">{tag}</span>
            {/each}
          </div>
        </a>
      </article>
    {/each}
  </div>
</main>
