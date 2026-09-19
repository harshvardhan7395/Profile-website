import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { GithubIcon } from '../../shared/icons/github-icon';

@Component({
  selector: 'app-hero',
  imports: [GithubIcon],
  templateUrl: './hero.html',
})
export class Hero {
  readonly hero = PROFILE_DATA.hero;
}
