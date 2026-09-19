import { TestBed } from '@angular/core/testing';
import { Experience } from './experience';
import { PROFILE_DATA } from '../../data/profile-data';

describe('Experience', () => {
  it('should render one timeline entry per item in PROFILE_DATA.experience', async () => {
    await TestBed.configureTestingModule({ imports: [Experience] }).compileComponents();
    const fixture = TestBed.createComponent(Experience);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelectorAll('.timeline__entry').length).toBe(PROFILE_DATA.experience.length);
  });

  it('should show KYL Software as "May 2025 – Jun 2026" when the experience is rendered', async () => {
    await TestBed.configureTestingModule({ imports: [Experience] }).compileComponents();
    const fixture = TestBed.createComponent(Experience);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const kyl = [...el.querySelectorAll('.timeline__entry')].find((e) => e.textContent?.includes('KYL Software'))!;

    expect(kyl.querySelector('.timeline__date')?.textContent?.trim()).toBe('May 2025 – Jun 2026');
  });

  it('should include the npm Workspaces monorepo bullet for Hire Digital when the experience is rendered', async () => {
    await TestBed.configureTestingModule({ imports: [Experience] }).compileComponents();
    const fixture = TestBed.createComponent(Experience);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const hireDigital = [...el.querySelectorAll('.timeline__entry')].find((e) => e.textContent?.includes('Hire Digital'))!;

    expect(hireDigital.textContent).toContain('npm Workspaces monorepo');
    expect(hireDigital.textContent).toContain('@hiredigital/ui');
  });

  it('should collapse bullets beyond the first three and reveal them when "Show more" is clicked', async () => {
    await TestBed.configureTestingModule({ imports: [Experience] }).compileComponents();
    const fixture = TestBed.createComponent(Experience);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const firstEntry = el.querySelector('.timeline__entry') as HTMLElement;
    const totalBullets = PROFILE_DATA.experience[0].bullets.length;

    expect(firstEntry.querySelectorAll('li').length).toBe(totalBullets);
    expect(firstEntry.querySelectorAll('.timeline__bullet--collapsed').length).toBe(totalBullets - 3);

    (firstEntry.querySelector('.timeline__more') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(firstEntry.querySelectorAll('.timeline__bullet--collapsed').length).toBe(0);
    expect(firstEntry.querySelector('.timeline__more')?.getAttribute('aria-expanded')).toBe('true');
  });
});
