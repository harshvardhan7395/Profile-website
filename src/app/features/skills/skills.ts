import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { skillLogoSrc } from './skill-logos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  readonly skillGroups = PROFILE_DATA.skillGroups;

  readonly logoSrc = skillLogoSrc;
}
