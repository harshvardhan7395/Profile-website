import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';
import { PROFILE_DATA } from '../../data/profile-data';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Projects] }).compileComponents();
  });

  it("should show the company-projects panel when activeTab is 'company'", () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('#tab-company')).toBeTruthy();
    expect(el.querySelector('#tab-github')).toBeFalsy();
    expect(el.querySelectorAll('#tab-company app-project-card').length).toBe(PROFILE_DATA.companyProjects.length);
  });

  it("should show the github-projects panel when activeTab is 'github'", () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.componentInstance.activeTab.set('github');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('#tab-github')).toBeTruthy();
    expect(el.querySelector('#tab-company')).toBeFalsy();
    expect(el.querySelectorAll('#tab-github app-project-card').length).toBe(PROFILE_DATA.githubProjects.length);
  });

  it('should switch panels when the other tab button is clicked', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const buttons = el.querySelectorAll<HTMLButtonElement>('.tab-btn');

    expect(el.querySelector('#tab-company')).toBeTruthy();

    buttons[1].click();
    fixture.detectChanges();

    expect(el.querySelector('#tab-github')).toBeTruthy();
    expect(el.querySelector('#tab-company')).toBeFalsy();
    expect(buttons[1].classList.contains('tab-btn--active')).toBe(true);
    expect(buttons[0].classList.contains('tab-btn--active')).toBe(false);
  });
});
