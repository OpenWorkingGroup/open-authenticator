import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';

import { IonicBundleModule } from '../shared/ionic-bundle.module';
import { UiService } from '../shared/services/ui.service';

import { AccountCardComponent } from './account-card/account-card.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicBundleModule, AccountCardComponent],
})
export class AccountsPage {
  private ui = inject(UiService);

  displayName = 'open authenticator';
  description = 'open things with it';
  homepage = 'https://openwineproject.org';

  accounts = signal([
    {
      issuer: 'GitHub',
      label: 'mrjonleek@gmail.com',
    },
  ]);

  constructor() {
    addIcons({ informationCircleOutline });
  }

  /**
   * Display an alert describing the app.
   * The first action dissmisses the alert while the second opens
   * the app homepage in the system browser.
   *
   */
  aboutAlertActions = [
    // Action 1: close and cancel interaction
    this.ui.actions.close,
    // Action 2: open homepage link in system browser
    {
      ...this.ui.actions.info,
      handler: () => window.open(this.homepage, '_blank'),
    },
  ];
}
