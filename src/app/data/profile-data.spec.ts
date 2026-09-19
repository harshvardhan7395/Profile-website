import { PROFILE_DATA } from './profile-data';

describe('PROFILE_DATA', () => {
  it('should contain all required top-level sections when PROFILE_DATA is loaded', () => {
    expect(PROFILE_DATA.hero).toBeTruthy();
    expect(PROFILE_DATA.about.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.skillGroups.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.experience.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.companyProjects.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.githubProjects.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.education.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.otherProjects.length).toBeGreaterThan(0);
    expect(PROFILE_DATA.footer).toBeTruthy();
  });

  it('should include FleetGate and GroundTruth-Sync among the GitHub projects', () => {
    const titles = PROFILE_DATA.githubProjects.map((p) => p.title);
    expect(titles).toContain('FleetGate');
    expect(titles).toContain('GroundTruth-Sync');
  });
});
