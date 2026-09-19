import { TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

function createCard(inputs: Partial<{
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  badgeLabel: string;
  badgeVariant: 'kyl' | 'vebasoft' | 'hiredigital' | 'maverick';
  repoUrl: string;
}>) {
  const fixture = TestBed.createComponent(ProjectCard);
  fixture.componentRef.setInput('title', inputs.title ?? 'Some Project');
  fixture.componentRef.setInput('tagline', inputs.tagline ?? 'Some tagline');
  fixture.componentRef.setInput('description', inputs.description ?? 'Some description');
  fixture.componentRef.setInput('tech', inputs.tech ?? ['TypeScript']);
  if (inputs.badgeLabel !== undefined) fixture.componentRef.setInput('badgeLabel', inputs.badgeLabel);
  if (inputs.badgeVariant !== undefined) fixture.componentRef.setInput('badgeVariant', inputs.badgeVariant);
  if (inputs.repoUrl !== undefined) fixture.componentRef.setInput('repoUrl', inputs.repoUrl);
  fixture.detectChanges();
  return fixture;
}

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
  });

  it('should render the GitHub badge and icon link when repoUrl is provided', () => {
    const fixture = createCard({ repoUrl: 'https://github.com/harshvardhan7395/FleetGate' });
    const el = fixture.nativeElement as HTMLElement;

    const links = el.querySelectorAll<HTMLAnchorElement>('.project-card__repo-link');
    expect(links.length).toBe(2);
    links.forEach((link) => expect(link.getAttribute('href')).toBe('https://github.com/harshvardhan7395/FleetGate'));
    expect(el.querySelector('.badge--github')).toBeTruthy();
    expect(el.querySelector('.badge:not(.badge--github)')).toBeFalsy();
  });

  it('should render a plain company badge when badgeLabel is provided instead of repoUrl', () => {
    const fixture = createCard({ badgeLabel: 'KYL Software', badgeVariant: 'kyl' });
    const el = fixture.nativeElement as HTMLElement;

    const badge = el.querySelector('.badge');
    expect(badge?.textContent).toContain('KYL Software');
    expect(badge?.classList.contains('badge--kyl')).toBe(true);
    expect(el.querySelector('.project-card__repo-link')).toBeFalsy();
  });

  it('should toggle expanded when the summary block is clicked', () => {
    const fixture = createCard({});
    const card = fixture.componentInstance;
    const summary = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.project-card__summary')!;

    expect(card.expanded()).toBe(false);
    summary.click();
    expect(card.expanded()).toBe(true);
    summary.click();
    expect(card.expanded()).toBe(false);
  });

  it('should NOT toggle expanded when a repo-link anchor inside the summary is clicked', () => {
    const fixture = createCard({ repoUrl: 'https://github.com/harshvardhan7395/FleetGate' });
    const card = fixture.componentInstance;
    const repoLink = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.project-card__repo-link')!;

    expect(card.expanded()).toBe(false);
    repoLink.click();
    expect(card.expanded()).toBe(false);
  });

  it('should hide the detail block when expanded is false, and show description + tech chips when true', () => {
    const fixture = createCard({ description: 'Full description here', tech: ['A', 'B'] });
    const card = fixture.componentInstance;
    const el = fixture.nativeElement as HTMLElement;
    const detail = () => el.querySelector<HTMLElement>('.project-card__detail')!;

    expect(detail().hidden).toBe(true);

    card.expanded.set(true);
    fixture.detectChanges();

    expect(detail().hidden).toBe(false);
    expect(detail().querySelector('.project-card__desc')?.textContent).toContain('Full description here');
    expect(detail().querySelectorAll('.chip').length).toBe(2);
  });
});
