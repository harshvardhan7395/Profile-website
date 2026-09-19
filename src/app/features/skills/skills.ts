import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { SKILL_LOGOS } from './skill-logos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  readonly skillGroups = PROFILE_DATA.skillGroups;

  logoSrc(skill: string): string | null {
    const slug = SKILL_LOGOS[skill];
    return slug ? `logos/skills/${slug}.svg` : null;
  }
}
