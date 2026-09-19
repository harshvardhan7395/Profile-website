import { TestBed } from '@angular/core/testing';
import { Skills } from './skills';
import { PROFILE_DATA } from '../../data/profile-data';

async function renderSkills(): Promise<HTMLElement> {
  await TestBed.configureTestingModule({ imports: [Skills] }).compileComponents();
  const fixture = TestBed.createComponent(Skills);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

function pill(el: HTMLElement, name: string): HTMLElement | undefined {
  return Array.from(el.querySelectorAll<HTMLElement>('.chip')).find(
    (c) => c.textContent?.trim() === name,
  );
}

describe('Skills', () => {
  it('should render a pill showing the skill name for every skill when the skills section is shown', async () => {
    const el = await renderSkills();

    for (const group of PROFILE_DATA.skillGroups) {
      for (const skill of group.skills) {
        expect(pill(el, skill), skill).toBeDefined();
      }
    }
  });

  it('should render the logo inside the pill when a skill has a mapped logo', async () => {
    const el = await renderSkills();

    for (const name of ['TypeScript', 'Node.js', 'GitLab CI', 'Claude Code']) {
      expect(pill(el, name)?.querySelector('img'), name).not.toBeNull();
    }
    expect(el.querySelectorAll('.chip img').length).toBe(27);
    expect(el.querySelectorAll('img:not(.chip img)').length).toBe(0);
  });

  it('should use a relative src with no leading slash when rendering a logo', async () => {
    const el = await renderSkills();

    expect(pill(el, 'GitLab CI')?.querySelector('img')?.getAttribute('src')).toBe(
      'logos/skills/gitlab.svg',
    );
    for (const img of Array.from(el.querySelectorAll('img'))) {
      expect(img.getAttribute('src')?.startsWith('/')).toBe(false);
    }
  });

  it('should mark the logo as decorative when the pill already shows the skill name', async () => {
    const el = await renderSkills();

    for (const img of Array.from(el.querySelectorAll('img'))) {
      expect(img.getAttribute('alt')).toBe('');
    }
  });

  it('should render a pill without a logo when a skill has no logo', async () => {
    const el = await renderSkills();

    for (const name of ['NGXS', 'CSS3', 'Angular Material', 'English (C1)', 'German (A2)']) {
      const p = pill(el, name);
      expect(p, name).toBeDefined();
      expect(p?.querySelector('img'), name).toBeNull();
    }
  });

  it('should render exactly one pill per skill within each group when the section is shown', async () => {
    const el = await renderSkills();

    const groups = Array.from(el.querySelectorAll('.skills__group'));
    expect(groups.length).toBe(PROFILE_DATA.skillGroups.length);
    groups.forEach((group, i) => {
      expect(group.querySelectorAll('.chip').length).toBe(PROFILE_DATA.skillGroups[i].skills.length);
    });
  });
});
