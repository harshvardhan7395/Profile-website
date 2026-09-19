import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { PROFILE_DATA } from '../../data/profile-data';

describe('Hero', () => {
  it('should render the hero name, title, and contact links from PROFILE_DATA.hero', async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
    const fixture = TestBed.createComponent(Hero);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.hero__name')?.textContent).toContain(PROFILE_DATA.hero.name);
    expect(el.querySelector('.hero__title')?.textContent).toContain(PROFILE_DATA.hero.title);
    expect(el.querySelectorAll('.hero__link').length).toBe(PROFILE_DATA.hero.links.length);
  });

  it('should show "Full Stack Engineer · Backend focus" as the hero title when the hero is shown', async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
    const fixture = TestBed.createComponent(Hero);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.hero__title')?.textContent?.trim()).toBe('Full Stack Engineer · Backend focus');
  });

  it('should render a Download CV link to docs/Harshvardhan_CV.pdf with the download attribute when the hero is shown', async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
    const fixture = TestBed.createComponent(Hero);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const link = el.querySelector('.hero__cv') as HTMLAnchorElement;

    expect(link.textContent).toContain('Download CV');
    expect(link.getAttribute('href')).toBe('docs/Harshvardhan_CV.pdf');
    expect(link.hasAttribute('download')).toBe(true);
  });

  it('should use a relative URL with no leading slash when linking the CV, so it resolves under the base href', async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
    const fixture = TestBed.createComponent(Hero);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const href = (el.querySelector('.hero__cv') as HTMLAnchorElement).getAttribute('href')!;

    expect(href).not.toMatch(/^\/|^[a-z]+:/i);
  });

  it('should render one stat tile per item in PROFILE_DATA.hero.stats and no phone number', async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
    const fixture = TestBed.createComponent(Hero);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelectorAll('.hero__stat').length).toBe(PROFILE_DATA.hero.stats.length);
    expect(el.textContent).not.toMatch(/\+49/);
  });
});
