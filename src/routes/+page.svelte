<script lang="ts">
  import resume from '$lib/resume';
</script>

<svelte:head>
  <title>{resume.basics.name} — {resume.basics.label}</title>
  <meta name="description" content={resume.basics.summary} />
</svelte:head>

<main>
  <section class="hero">
    <div class="hero-eyebrow">
      <span class="dot"></span>
      <span>Disponible</span>
    </div>
    <h1>{resume.basics.name}</h1>
    <p class="hero-role">{resume.basics.label}</p>
    <p class="hero-summary">{resume.basics.summary}</p>
    <div class="hero-actions">
      <a href="/resume" class="btn-primary">Voir le CV</a>
      {#each resume.basics.profiles as p (p.network)}
        <a href={p.url} target="_blank" rel="noopener noreferrer" class="btn-secondary">{p.network}</a>
      {/each}
    </div>
  </section>

  <section class="skills-section">
    <p class="section-label">Stack</p>
    <div class="skills-list">
      {#each resume.skills as group (group.name)}
        <div class="skill-group">
          <span class="skill-name">{group.name}</span>
          <div class="skill-tags">
            {#each group.keywords as kw (kw)}
              <span class="tag">{kw}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="exp-section">
    <p class="section-label">Experience recente</p>
    {#each resume.work.slice(0, 2) as job (`${job.name}-${job.position}`)}
      <div class="exp-card" class:exp-current={!job.endDate}>
        <div class="exp-header">
          <div>
            <span class="exp-title">{job.position}</span>
            <span class="exp-company">{job.name}</span>
          </div>
          <span class="exp-dates">
            {job.startDate.slice(0, 4)}{job.endDate ? `–${job.endDate.slice(0, 4)}` : '–present'}
          </span>
        </div>
        <p class="exp-summary">{job.summary}</p>
        <div class="skill-tags">
          {#each job.keywords as kw (kw)}
            <span class="tag">{kw}</span>
          {/each}
        </div>
      </div>
    {/each}
  </section>
</main>

<style>
  main {
    max-width: 52rem;
    margin: 0 auto;
    padding: 4rem 1.5rem 6rem;
  }

  /* Hero */
  .hero {
    margin-bottom: 4rem;
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--accent);
    margin-bottom: 1.25rem;
    letter-spacing: 0.05em;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  h1 {
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    font-weight: 700;
    color: var(--text);
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 0.5rem;
  }

  .hero-role {
    font-family: var(--mono);
    font-size: 0.875rem;
    color: var(--text-2);
    margin-bottom: 1.25rem;
  }

  .hero-summary {
    font-size: 1rem;
    color: var(--text-2);
    line-height: 1.7;
    max-width: 38rem;
    margin-bottom: 2rem;
  }

  .hero-actions {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    font-family: var(--mono);
    font-size: 0.75rem;
    padding: 0.5rem 1.125rem;
    background: var(--accent);
    color: #061a0b;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    transition: opacity 0.15s;
  }

  .btn-primary:hover { opacity: 0.88; }

  .btn-secondary {
    font-family: var(--mono);
    font-size: 0.75rem;
    padding: 0.5rem 1.125rem;
    border: 1px solid var(--border-2);
    color: var(--text-2);
    text-decoration: none;
    border-radius: 4px;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
  }

  .btn-secondary:hover {
    border-color: var(--text-3);
    color: var(--text);
    background: var(--surface-2);
  }

  /* Section label */
  .section-label {
    font-family: var(--mono);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-3);
    margin-bottom: 1.25rem;
  }

  /* Skills */
  .skills-section {
    margin-bottom: 3.5rem;
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface);
  }

  .skills-list {
    display: grid;
    gap: 0.875rem;
  }

  .skill-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: baseline;
  }

  .skill-name {
    font-family: var(--mono);
    font-size: 0.6875rem;
    color: var(--text-3);
    width: 13rem;
    flex-shrink: 0;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tag {
    font-family: var(--mono);
    font-size: 0.6375rem;
    padding: 0.2rem 0.5rem;
    background: var(--surface-2);
    border: 1px solid var(--border);
    color: var(--text-2);
    border-radius: 3px;
  }

  /* Experience */
  .exp-section {
    display: grid;
    gap: 1rem;
  }

  .exp-card {
    padding: 1.25rem 1.25rem 1.25rem 1.125rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface);
    border-left-width: 1px;
    transition: border-color 0.15s;
  }

  .exp-card:hover {
    border-color: var(--border-2);
  }

  .exp-current {
    border-left: 2px solid var(--accent);
  }

  .exp-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.625rem;
  }

  .exp-title {
    display: block;
    font-weight: 600;
    font-size: 0.9375rem;
    color: var(--text);
    margin-bottom: 0.2rem;
  }

  .exp-company {
    display: block;
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--accent);
  }

  .exp-dates {
    font-family: var(--mono);
    font-size: 0.6875rem;
    color: var(--text-3);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .exp-summary {
    font-size: 0.85rem;
    color: var(--text-2);
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }
</style>
