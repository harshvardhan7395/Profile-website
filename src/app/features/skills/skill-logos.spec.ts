import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SKILL_LOGOS } from './skill-logos';

describe('skill logo assets', () => {
  it('should have an SVG file in public/logos/skills for every mapped logo', () => {
    const slugs = new Set(Object.values(SKILL_LOGOS));
    expect(slugs.size).toBeGreaterThan(0);

    for (const slug of slugs) {
      const svg = readFileSync(join(process.cwd(), 'public', 'logos', 'skills', `${slug}.svg`), 'utf8');
      expect(svg, slug).toContain('<svg');
    }
  });
});
