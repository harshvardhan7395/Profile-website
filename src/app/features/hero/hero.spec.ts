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
});
