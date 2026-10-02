import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { skillLogoSrc } from '../skills/skill-logos';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
})
export class Education {
  readonly education = PROFILE_DATA.education;
  readonly otherProjects = PROFILE_DATA.otherProjects;
  readonly logoSrc = skillLogoSrc;
}
