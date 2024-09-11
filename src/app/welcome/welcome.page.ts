import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IonicBundleModule } from '../shared/ionic-bundle.module';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicBundleModule, RouterLink],
})
export class WelcomePage {
  constructor() {
    addIcons({ heartOutline });
  }
}
