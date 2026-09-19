import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly footer = PROFILE_DATA.footer;
}
