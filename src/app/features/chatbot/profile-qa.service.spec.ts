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

  it.each(['are you available?', 'what is your notice period?', 'when can you start?'])(
    'should answer that I can join immediately when asked "%s"',
    (question) => {
      expect(service.answer(question)).toContain('join immediately');
    },
  );

  it('should mention relocation to the Netherlands and within Germany when asked about relocating', () => {
    const answer = service.answer('are you willing to relocate?');

    expect(answer).toContain('Netherlands');
    expect(answer).toContain('within Germany');
  });

  it('should answer with availability, not the location intent, when asked "are you open to relocation?"', () => {
    const answer = service.answer('are you open to relocation?');

    expect(answer).toContain('join immediately');
    expect(answer).not.toBe(PROFILE_DATA.hero.location);
  });

  it('should answer availability, not the Hire Digital entry, when the question contains "hire" but not "Hire Digital"', () => {
    const answer = service.answer('could you join immediately if we hire you?');

    expect(answer).toContain('join immediately');
    expect(answer).not.toContain('Hire Digital');
  });

  it('should still return the Hire Digital entry when the question names "Hire Digital"', () => {
    const answer = service.answer('what did you do at Hire Digital?');
    const exp = PROFILE_DATA.experience.find((e) => e.company === 'Hire Digital')!;

    expect(answer).toContain(exp.role);
    expect(answer).toContain(exp.bullets[0]);
  });

  it('should return the Hire Digital entry when the question spells the name "HireDigital"', () => {
    const answer = service.answer('what did you do at HireDigital?');

    expect(answer).toContain('Software Development Engineer at Hire Digital');
  });

  it('should still answer with the location when asked "where are you based?"', () => {
    expect(service.answer('where are you based?')).toBe(PROFILE_DATA.hero.location);
  });

  it('should return a fallback message with example questions when nothing matches', () => {
    const answer = service.answer('asdkjqwoiuerqwoiuasdf nonsense gibberish');
    expect(answer.toLowerCase()).toContain('not sure');
  });

  it('should return technology-specific experience when asked about experience with a named technology', () => {
    const answer = service.answer('do you have experience with React?');
    const reactProjects = [...PROFILE_DATA.companyProjects, ...PROFILE_DATA.githubProjects].filter((p) =>
      p.tech.some((t) => t.toLowerCase() === 'react'),
    );

    expect(answer).toContain('React');
    for (const project of reactProjects) {
      expect(answer).toContain(project.title);
    }
  });

  it('should prefer the more specific technology match when a longer tech name is also mentioned', () => {
    const answer = service.answer('what is your experience with Angular Material?');
    expect(answer).toContain('Angular Material');
  });
});
