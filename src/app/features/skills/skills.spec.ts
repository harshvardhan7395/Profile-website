import { TestBed } from '@angular/core/testing';
import { Skills } from './skills';
import { PROFILE_DATA } from '../../data/profile-data';

describe('Skills', () => {
  it('should render one chip per skill within each skill group', async () => {
    await TestBed.configureTestingModule({ imports: [Skills] }).compileComponents();
    const fixture = TestBed.createComponent(Skills);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const expectedChipCount = PROFILE_DATA.skillGroups.reduce((sum, g) => sum + g.skills.length, 0);
    expect(el.querySelectorAll('.chip').length).toBe(expectedChipCount);
    expect(el.querySelectorAll('.skills__group').length).toBe(PROFILE_DATA.skillGroups.length);
  });
});
