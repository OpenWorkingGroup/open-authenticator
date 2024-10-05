import { Component, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment as env } from 'src/environments/environment';

import { addIcons } from 'ionicons';
import { informationCircleOutline, addOutline } from 'ionicons/icons';

import { IonicBundleModule } from '../shared/ionic-bundle.module';
import { UiService } from '../shared/services/ui.service';

import { AccountService } from '../shared/services/account.service';
import { AccountCardComponent } from './account-card/account-card.component';

import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    NgFor,
    IonicBundleModule,
    AccountCardComponent,
    RouterLink,
    ToolbarComponent,
  ],
})
export class AccountsPage {
  private ui = inject(UiService);

  protected title = env.title;
  protected description = env.description;
  protected homepage = env.homepage;

  //
  protected query = signal('');

  //
  protected accounts = inject(AccountService).accounts;

  constructor() {
    addIcons({ addOutline, informationCircleOutline });
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
