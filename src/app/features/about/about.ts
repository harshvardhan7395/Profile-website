import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  readonly about = PROFILE_DATA.about;
}
