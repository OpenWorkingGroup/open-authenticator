import {
  Component,
  HostListener,
  inject,
  signal,
  ViewChild,
} from '@angular/core';

import { environment as env } from 'src/environments/environment';

import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { UiService } from '../shared/services/ui.service';
import { IonSearchbar } from '@ionic/angular/standalone';

import { AccountsModule } from './accounts.module';
import { AccountService } from '../shared/services/account.service';

import { FilterPipe } from '../shared/pipes/filter.pipe';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [AccountsModule, FilterPipe],
})
export class AccountsPage {
  @ViewChild('query') searchbar!: IonSearchbar;

  private ui = inject(UiService);

  protected title = env.title;
  protected description = env.description;
  protected homepage = env.homepage;

  //
  protected filter = signal('');

  //
  protected accounts = inject(AccountService).accounts;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.searchbar.setFocus();
  }

  constructor() {
    addIcons({ addCircleOutline });
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
