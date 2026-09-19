import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROFILE_DATA } from './data/profile-data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero name from PROFILE_DATA', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__name')?.textContent).toContain(PROFILE_DATA.hero.name);
  });
});
