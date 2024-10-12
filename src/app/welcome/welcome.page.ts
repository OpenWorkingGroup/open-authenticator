import { Component } from '@angular/core';

import { WelcomeModule } from './welcome.module';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [WelcomeModule],
})
export class WelcomePage {
  protected title = env.title;
  protected description = env.description;
  protected homepage = env.homepage;
}
