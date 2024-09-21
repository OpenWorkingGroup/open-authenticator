import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { environment as env } from 'src/environments/environment';
import { IonicBundleModule } from '../shared/ionic-bundle.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicBundleModule, RouterLink],
})
export class WelcomePage {
  protected title = env.title;
  protected description = env.description;
  protected homepage = env.homepage;
}
