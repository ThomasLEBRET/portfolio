<script lang="ts">
  import '../styles/app.css';
  import { page } from '$app/stores';
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();

  const links = [
    { href: '/resume', label: 'CV' },
    { href: '/blog',   label: 'Blog' },
  ];
</script>

<nav>
  <a href="/" class="logo" aria-label="Accueil">
    <span class="logo-tl">TL</span>
    <span class="logo-dot">·</span>
  </a>
  <div class="nav-links">
    {#each links as link (link.href)}
      <a
        href={link.href}
        class="nav-link"
        class:active={$page.url.pathname === link.href}
      >{link.label}</a>
    {/each}
  </div>
</nav>

{@render children()}

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 50;
    height: var(--nav-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    background: color-mix(in srgb, var(--bg) 80%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    text-decoration: none;
  }

  .logo-tl {
    font-family: var(--mono);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text);
    letter-spacing: 0.04em;
  }

  .logo-dot {
    font-family: var(--mono);
    font-size: 0.8125rem;
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .nav-link {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--text-2);
    text-decoration: none;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    transition: color 0.15s, background 0.15s;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--text);
    background: var(--surface-2);
  }

  .nav-link.active {
    color: var(--accent);
  }

  @media print {
    nav { display: none; }
  }
</style>
