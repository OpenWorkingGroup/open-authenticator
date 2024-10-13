import { Component, effect, inject } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  NavController,
} from '@ionic/angular/standalone';

import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private router = inject(NavController);
  private accounts = inject(AccountService).accounts;

  constructor() {
    effect(() => {
      this.accounts().length === 0
        ? this.router.navigateBack(['/welcome'])
        : this.router.navigateForward(['/']);
    });
  }
}
