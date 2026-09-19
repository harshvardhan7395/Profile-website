import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  readonly hero = PROFILE_DATA.hero;
}
