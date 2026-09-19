import { TestBed } from '@angular/core/testing';
import { Skills } from './skills';
import { PROFILE_DATA } from '../../data/profile-data';

async function renderSkills(): Promise<HTMLElement> {
  await TestBed.configureTestingModule({ imports: [Skills] }).compileComponents();
  const fixture = TestBed.createComponent(Skills);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('Skills', () => {
  it('should render an <img> for every skill that has a mapped logo when the skills section is shown', async () => {
    const el = await renderSkills();

    for (const name of ['TypeScript', 'Node.js', 'GitLab CI', 'Claude Code']) {
      expect(el.querySelector(`img[alt="${name}"]`), name).not.toBeNull();
    }
    expect(el.querySelectorAll('img').length).toBe(27);
  });

  it('should use a relative src with no leading slash when rendering a logo', async () => {
    const el = await renderSkills();

    const gitlab = el.querySelector('img[alt="GitLab CI"]');
    expect(gitlab?.getAttribute('src')).toBe('logos/skills/gitlab.svg');
    for (const img of Array.from(el.querySelectorAll('img'))) {
      expect(img.getAttribute('src')?.startsWith('/')).toBe(false);
    }
  });

  it('should set alt and title to the skill name when a logo is shown', async () => {
    const el = await renderSkills();

    const logo = el.querySelector('img[alt="Next.js"]');
    expect(logo?.getAttribute('title')).toBe('Next.js');
  });

  it('should not show the skill name as visible text when a logo is shown', async () => {
    const el = await renderSkills();

    const text = el.textContent ?? '';
    expect(text).not.toContain('TypeScript');
    expect(text).not.toContain('Kubernetes');
  });

  it('should render a text chip with the skill name when a skill has no logo', async () => {
    const el = await renderSkills();

    const chips = Array.from(el.querySelectorAll('.chip')).map((c) => c.textContent?.trim());
    expect(chips).toEqual(
      expect.arrayContaining(['NGXS', 'CSS3', 'Angular Material', 'English (C1)', 'German (A2)']),
    );
    expect(el.querySelector('img[alt="NGXS"]')).toBeNull();
  });

  it('should render exactly one element per skill within each group when the section is shown', async () => {
    const el = await renderSkills();

    const groups = Array.from(el.querySelectorAll('.skills__group'));
    expect(groups.length).toBe(PROFILE_DATA.skillGroups.length);
    groups.forEach((group, i) => {
      expect(group.querySelectorAll('.skills__item').length).toBe(
        PROFILE_DATA.skillGroups[i].skills.length,
      );
    });
  });
});
