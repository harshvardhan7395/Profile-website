// Writes one brand-coloured SVG per skill logo into public/logos/skills/.
// Run with: npm run generate:skill-logos
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as simpleIcons from 'simple-icons';
import { SKILL_LOGOS } from '../src/app/features/skills/skill-logos.ts';

const outDir = fileURLToPath(new URL('../public/logos/skills/', import.meta.url));
const iconsBySlug = new Map(
  Object.values(simpleIcons)
    .filter((icon) => icon && typeof icon === 'object' && 'slug' in icon)
    .map((icon) => [icon.slug, icon]),
);

mkdirSync(outDir, { recursive: true });

for (const slug of new Set(Object.values(SKILL_LOGOS))) {
  const icon = iconsBySlug.get(slug);
  if (!icon) throw new Error(`simple-icons has no icon with slug "${slug}"`);
  const svg = icon.svg.replace('<svg ', `<svg fill="#${icon.hex}" `);
  writeFileSync(`${outDir}${slug}.svg`, svg);
  console.log(`${slug}.svg  #${icon.hex}`);
}
