import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROFILE_DATA } from './data/profile-data';
import { FEATURE_FLAGS } from './config/feature-flags';

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

  it('should render <app-chatbot> when FEATURE_FLAGS.chatbotEnabled is true', async () => {
    FEATURE_FLAGS.chatbotEnabled = true;
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('app-chatbot')).toBeTruthy();
  });

  it('should omit <app-chatbot> when FEATURE_FLAGS.chatbotEnabled is false', async () => {
    FEATURE_FLAGS.chatbotEnabled = false;
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('app-chatbot')).toBeFalsy();
    FEATURE_FLAGS.chatbotEnabled = true;
  });
});
