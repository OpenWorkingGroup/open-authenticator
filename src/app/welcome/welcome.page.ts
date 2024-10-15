import { Component, Input } from '@angular/core';

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
  @Input() protected title = env.title;
  @Input() protected description = env.description;
  @Input() protected homepage = env.homepage;
}
