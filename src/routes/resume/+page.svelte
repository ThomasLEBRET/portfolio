<script lang="ts">
  import resume from '$lib/resume';

  function formatDate(d: string) {
    const [year, month] = d.split('-');
    const m = ['jan','fev','mar','avr','mai','jun','jul','aou','sep','oct','nov','dec'];
    return month ? `${m[parseInt(month) - 1]} ${year}` : year;
  }

  let downloading = $state(false);

  async function handleDocx() {
    downloading = true;
    const { downloadDocx } = await import('$lib/docx');
    await downloadDocx(resume);
    downloading = false;
  }
</script>

<svelte:head>
  <title>CV — {resume.basics.name}</title>
  <meta name="description" content={resume.basics.summary} />
</svelte:head>

<main>
  <header>
    <div class="header-top">
      <div>
        <h1>{resume.basics.name}</h1>
        <p class="label">{resume.basics.label}</p>
        <p class="location">{resume.basics.location.city}, {resume.basics.location.region}</p>
      </div>
      <div class="contact">
        <p>{resume.basics.email}</p>
        <p>{resume.basics.phone}</p>
        {#each resume.basics.profiles as p (p.network)}
          <a href={p.url} target="_blank" rel="noopener noreferrer">{p.network}</a>
        {/each}
      </div>
    </div>
    <p class="summary">{resume.basics.summary}</p>

    <div class="header-actions no-print">
      <button onclick={() => window.print()}>
        Exporter PDF
      </button>
      <button onclick={handleDocx} disabled={downloading}>
        {downloading ? 'Generation...' : 'Dossier de competences (.docx)'}
      </button>
      <a href="/blog">Blog</a>
    </div>
  </header>

  <section>
    <h2>Experience</h2>
    {#each resume.work as job (`${job.name}-${job.position}`)}
      <div class="job" class:job-current={!job.endDate} class:job-past={!!job.endDate}>
        <div class="job-header">
          <div class="job-title-row">
            <h3>{job.position}</h3>
            {#if job.alternance}
              <span class="tag-alt">Alternance</span>
            {/if}
          </div>
          <span class="dates">
            {formatDate(job.startDate)} — {job.endDate ? formatDate(job.endDate) : 'present'}
          </span>
        </div>
        <p class="company">{job.name}</p>
        <p class="job-summary">{job.summary}</p>
        <ul class="highlights">
          {#each job.highlights as h (h)}
            <li>{h}</li>
          {/each}
        </ul>
        <div class="tags">
          {#each job.keywords as kw (kw)}
            <span class="tag">{kw}</span>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  <section>
    <h2>Formation</h2>
    {#each resume.education as edu (`${edu.institution}-${edu.studyType}`)}
      <div class="edu-row">
        <div>
          <span class="edu-degree">{edu.studyType} {edu.area}</span>
          <span class="edu-school">— {edu.institution}</span>
        </div>
        <span class="dates">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
      </div>
    {/each}
  </section>

  <section>
    <h2>Competences</h2>
    <div class="skills-grid">
      {#each resume.skills as group (group.name)}
        <div class="skill-row">
          <span class="skill-label">{group.name}</span>
          <div class="tags">
            {#each group.keywords as kw (kw)}
              <span class="tag">{kw}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Langues</h2>
    <div class="langs">
      {#each resume.languages as lang (lang.language)}
        <div class="lang-row">
          <span class="lang-name">{lang.language}</span>
          <span class="lang-level">— {lang.fluency}</span>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  /* ── SCREEN ─────────────────────────────────────────────────── */

  main {
    max-width: 52rem;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
  }

  header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--border);
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  h2 {
    font-family: var(--mono);
    font-size: 0.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-3);
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--text);
  }

  section {
    margin-bottom: 2.25rem;
  }

  .header-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .label {
    font-family: var(--mono);
    font-size: 0.8125rem;
    color: var(--accent);
    margin-top: 0.3rem;
  }

  .location {
    font-size: 0.8125rem;
    color: var(--text-2);
    margin-top: 0.2rem;
  }

  .contact {
    text-align: right;
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--text-2);
    line-height: 1.8;
    flex-shrink: 0;
  }

  .contact a {
    display: block;
    color: var(--accent);
    text-decoration: none;
  }

  .contact a:hover { text-decoration: underline; }

  .summary {
    font-size: 0.875rem;
    color: var(--text-2);
    line-height: 1.65;
    margin-top: 1rem;
    max-width: 42rem;
  }

  .header-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }

  .header-actions button,
  .header-actions a {
    font-family: var(--mono);
    font-size: 0.7rem;
    padding: 0.375rem 0.875rem;
    border: 1px solid var(--border-2);
    color: var(--text-2);
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
    border-radius: 4px;
  }

  .header-actions button:hover,
  .header-actions a:hover {
    border-color: var(--text-3);
    color: var(--text);
    background: var(--surface-2);
  }

  .header-actions button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Jobs */
  .job {
    margin-bottom: 1.75rem;
    padding-left: 1rem;
  }

  .job-current { border-left: 2px solid var(--accent); }
  .job-past    { border-left: 1px solid var(--border); }

  .job-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.2rem;
  }

  .job-title-row {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .tag-alt {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--text-3);
    border: 1px solid var(--border);
    padding: 0.1rem 0.45rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: 2px;
  }

  .dates {
    font-family: var(--mono);
    font-size: 0.6875rem;
    color: var(--text-3);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .company {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
  }

  .job-summary {
    font-size: 0.8375rem;
    color: var(--text-2);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .highlights {
    list-style: none;
    padding: 0;
    margin: 0 0 0.5rem;
  }

  .highlights li {
    font-size: 0.8375rem;
    color: var(--text-2);
    padding: 0.15rem 0;
    padding-left: 1rem;
    position: relative;
  }

  .highlights li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--text-3);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tag {
    font-family: var(--mono);
    font-size: 0.6375rem;
    padding: 0.2rem 0.5rem;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text-2);
    border-radius: 3px;
  }

  /* Education */
  .edu-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.625rem;
  }

  .edu-degree {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text);
  }

  .edu-school {
    font-size: 0.85rem;
    color: var(--text-2);
    margin-left: 0.25rem;
  }

  /* Skills */
  .skills-grid {
    display: grid;
    gap: 0.75rem;
  }

  .skill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: baseline;
  }

  .skill-label {
    font-family: var(--mono);
    font-size: 0.6875rem;
    color: var(--text-3);
    width: 13.5rem;
    flex-shrink: 0;
  }

  /* Languages */
  .langs { display: flex; gap: 2rem; }

  .lang-name {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text);
  }

  .lang-level {
    font-size: 0.85rem;
    color: var(--text-2);
    margin-left: 0.25rem;
  }

  /* ── PRINT ──────────────────────────────────────────────────── */

  @media print {
    @page {
      size: A4 portrait;
      margin: 0;
    }

    :global(body) {
      background: #fff !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    main {
      max-width: 100% !important;
      padding: 11mm 14mm !important;
      margin: 0 !important;
    }

    header {
      margin-bottom: 4mm !important;
      padding-bottom: 3.5mm !important;
      border-bottom-color: #e5e7eb !important;
    }

    section { margin-bottom: 4mm !important; }

    h1 { font-size: 16pt !important; color: #111 !important; }
    h2 { font-size: 7pt !important; color: #888 !important; margin-bottom: 2mm !important; }
    h3 { font-size: 9.5pt !important; color: #111 !important; }

    .label    { font-size: 10pt !important; color: #15803d !important; }
    .location { font-size: 8pt !important; color: #555 !important; }
    .contact  { font-size: 8pt !important; color: #555 !important; }
    .contact a { color: #15803d !important; }
    .summary  { font-size: 8.5pt !important; color: #333 !important; margin-top: 2mm !important; }

    .no-print { display: none !important; }

    .job          { margin-bottom: 3mm !important; padding-left: 3.5mm !important; }
    .job-current  { border-left: 2px solid #15803d !important; }
    .job-past     { border-left: 1px solid #d1d5db !important; }

    .tag-alt    { color: #aaa !important; border-color: #e5e7eb !important; }
    .dates      { font-size: 7.5pt !important; color: #888 !important; }
    .company    { font-size: 8pt !important; color: #15803d !important; margin-bottom: 1mm !important; }
    .job-summary { font-size: 8pt !important; color: #444 !important; margin-bottom: 1mm !important; }

    .highlights li         { font-size: 8pt !important; color: #444 !important; margin-bottom: 0.5mm !important; }
    .highlights li::before { color: #bbb !important; }

    .tags { gap: 1.5mm !important; margin-top: 1mm !important; }
    .tag  { font-size: 7pt !important; background: #f3f4f6 !important; border-color: #e5e7eb !important; color: #555 !important; padding: 0.4mm 1.5mm !important; }

    .edu-row    { margin-bottom: 1.5mm !important; }
    .edu-degree { font-size: 8.5pt !important; color: #111 !important; }
    .edu-school { font-size: 8pt !important;   color: #555 !important; }

    .skills-grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 1.5mm 6mm !important;
    }

    .skill-label { font-size: 7.5pt !important; color: #888 !important; width: auto !important; min-width: 8rem !important; }
    .skill-row   { gap: 1mm !important; }

    .lang-name  { font-size: 8.5pt !important; color: #111 !important; }
    .lang-level { font-size: 8pt !important;   color: #555 !important; }
    .langs      { gap: 4mm !important; }
  }
</style>
