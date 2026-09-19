import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  readonly experience = PROFILE_DATA.experience;
}
