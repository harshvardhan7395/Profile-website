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
});
