import { TestBed } from '@angular/core/testing';
import { ProfileQaService } from './profile-qa.service';
import { PROFILE_DATA } from '../../data/profile-data';

describe('ProfileQaService', () => {
  let service: ProfileQaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileQaService);
  });

  it("should return a project's tagline and description when the question names that project", () => {
    const answer = service.answer('tell me about FleetGate');
    const project = PROFILE_DATA.githubProjects.find((p) => p.title === 'FleetGate')!;

    expect(answer).toContain(project.tagline);
    expect(answer).toContain(project.description);
  });

  it("should return an experience entry's details when the question names that company", () => {
    const answer = service.answer('what did you do at vebasoft');
    const exp = PROFILE_DATA.experience.find((e) => e.company.startsWith('vebasoft'))!;

    expect(answer).toContain(exp.role);
    expect(answer).toContain(exp.company);
    expect(answer).toContain(exp.bullets[0]);
  });

  it('should return the grouped skills list when asked about skills', () => {
    const answer = service.answer('what are your skills?');

    for (const group of PROFILE_DATA.skillGroups) {
      expect(answer).toContain(group.label);
    }
  });

  it('should return the about/bio text when asked "who are you"', () => {
    const answer = service.answer('who are you?');
    expect(answer).toBe(PROFILE_DATA.about);
  });

  it('should return contact links when asked how to reach the person', () => {
    const answer = service.answer('how can I reach you?');

    for (const link of PROFILE_DATA.hero.links) {
      expect(answer).toContain(link.href);
    }
  });

  it('should return a fallback message with example questions when nothing matches', () => {
    const answer = service.answer('asdkjqwoiuerqwoiuasdf nonsense gibberish');
    expect(answer.toLowerCase()).toContain('not sure');
  });
});
