import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@capacitor/clipboard';

import { addIcons } from 'ionicons';
import { copyOutline, clipboardOutline } from 'ionicons/icons';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicBundleModule],
})
export class AccountCardComponent {
  private ui = inject(UiService);

  account = input<any>();

  constructor() {
    addIcons({ copyOutline, clipboardOutline });
  }

  presentActionSheet() {}

  async copyToClipboard($event: any, string: string) {
    try {
      await Clipboard.write({ string });
      this.ui.toast('info', { message: 'Copied!', duration: 500 });
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}
