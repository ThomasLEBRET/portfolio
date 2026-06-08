import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  BorderStyle,
} from 'docx';
import fileSaver from 'file-saver';
const { saveAs } = fileSaver as unknown as { saveAs: (blob: Blob, name: string) => void };
import type { Resume } from './resume';

const ACCENT = '1A7F37';
const MUTED  = '6B7280';
const DARK   = '111827';

function heading1(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 36, color: DARK })],
    spacing: { after: 60 },
  });
}

function heading2(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 16, color: MUTED, characterSpacing: 80 })],
    spacing: { before: 200, after: 80 },
    border: {
      bottom: { color: 'E5E7EB', space: 4, style: BorderStyle.SINGLE, size: 4 },
    },
  });
}

function subheading(left: string, right: string, isAlternance = false): Paragraph {
  const children: TextRun[] = [
    new TextRun({ text: left, bold: true, size: 22, color: DARK }),
  ];
  if (isAlternance) {
    children.push(new TextRun({ text: '  Alternance', size: 16, color: MUTED, italics: true }));
  }
  if (right) {
    children.push(new TextRun({ text: `\t${right}`, size: 18, color: MUTED }));
  }
  return new Paragraph({
    children,
    tabStops: [{ type: 'right', position: 9350 }],
    spacing: { before: 160, after: 40 },
  });
}

function company(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, size: 18, color: ACCENT })],
    spacing: { after: 40 },
  });
}

function body(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, size: 18, color: '374151' })],
    spacing: { after: 60 },
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, size: 18, color: '374151' })],
    bullet: { level: 0 },
    spacing: { after: 30 },
  });
}

function keywordsLine(keywords: string[]): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: keywords.join('  ·  '), size: 16, color: MUTED })],
    spacing: { after: 80 },
  });
}

function formatDate(d: string): string {
  const [year, month] = d.split('-');
  const months = ['jan', 'fev', 'mar', 'avr', 'mai', 'jun', 'jul', 'aou', 'sep', 'oct', 'nov', 'dec'];
  return month ? `${months[parseInt(month) - 1]} ${year}` : year;
}

export async function downloadDocx(resume: Resume): Promise<void> {
  const children: Paragraph[] = [];

  // ── Header ─────────────────────────────────────────────────
  children.push(heading1(resume.basics.name));
  children.push(new Paragraph({
    children: [new TextRun({ text: resume.basics.label, size: 22, color: ACCENT })],
    spacing: { after: 60 },
  }));
  children.push(new Paragraph({
    children: [
      new TextRun({ text: resume.basics.email, size: 18, color: MUTED }),
      new TextRun({ text: '   ·   ', size: 18, color: 'D1D5DB' }),
      new TextRun({ text: resume.basics.phone, size: 18, color: MUTED }),
      new TextRun({ text: '   ·   ', size: 18, color: 'D1D5DB' }),
      new TextRun({ text: resume.basics.url, size: 18, color: MUTED }),
    ],
    spacing: { after: 60 },
  }));
  children.push(body(resume.basics.summary));

  // ── Experience ─────────────────────────────────────────────
  children.push(heading2('Experience professionnelle'));
  for (const job of resume.work) {
    const dates = `${formatDate(job.startDate)} — ${job.endDate ? formatDate(job.endDate) : 'present'}`;
    children.push(subheading(job.position, dates, job.alternance));
    children.push(company(job.name));
    children.push(body(job.summary));
    for (const h of job.highlights) {
      children.push(bullet(h));
    }
    children.push(keywordsLine(job.keywords));
  }

  // ── Formation ──────────────────────────────────────────────
  children.push(heading2('Formation'));
  for (const edu of resume.education) {
    const dates = `${formatDate(edu.startDate)} — ${formatDate(edu.endDate)}`;
    children.push(subheading(`${edu.studyType} ${edu.area}`, dates));
    children.push(company(edu.institution));
  }

  // ── Competences ────────────────────────────────────────────
  children.push(heading2('Competences techniques'));
  for (const group of resume.skills) {
    children.push(new Paragraph({
      children: [
        new TextRun({ text: `${group.name}  `, size: 18, bold: true, color: DARK }),
        new TextRun({ text: group.keywords.join('  ·  '), size: 18, color: MUTED }),
      ],
      spacing: { after: 50 },
    }));
  }

  // ── Langues ────────────────────────────────────────────────
  children.push(heading2('Langues'));
  for (const lang of resume.languages) {
    children.push(new Paragraph({
      children: [
        new TextRun({ text: `${lang.language}  `, size: 18, bold: true, color: DARK }),
        new TextRun({ text: lang.fluency, size: 18, color: MUTED }),
      ],
      spacing: { after: 50 },
    }));
  }

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: 'Calibri', size: 18, color: DARK },
          paragraph: { spacing: { line: 276 } },
        },
      },
    },
    sections: [{ children }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, 'Dossier_Competences_Thomas_LEBRET.docx');
}
