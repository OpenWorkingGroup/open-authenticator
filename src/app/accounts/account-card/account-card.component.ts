import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular/standalone';
import { Clipboard } from '@capacitor/clipboard';

import { addIcons } from 'ionicons';
import { copyOutline, clipboardOutline } from 'ionicons/icons';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';
import { UiService } from 'src/app/shared/services/ui.service';
import { LongPressDirective } from 'src/app/shared/directives/long-press.directive';
import { AccountService } from 'src/app/shared/services/account.service';
import { TimeoutPipe } from 'src/app/shared/pipes/timeout.pipe';
import { CopyTokenComponent } from 'src/app/shared/components/copy-token/copy-token.component';
import { HOTP, TOTP } from 'otpauth';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CopyTokenComponent,
    IonicBundleModule,
    LongPressDirective,
    TimeoutPipe,
  ],
})
export class AccountCardComponent {
  private actionSheetCtrl = inject(ActionSheetController);
  private router = inject(Router);
  private ui = inject(UiService);

  private accounts = inject(AccountService).accounts;

  account = input.required<any>();
  id = input.required<number>();

  constructor() {
    addIcons({ copyOutline, clipboardOutline });
  }

  async copyToClipboard($event: any, string: string) {
    try {
      await Clipboard.write({ string });
      this.ui.toast('info', { message: 'Copied!', duration: 500 });
    } catch (error) {
      throw Error(`${error}`);
    }
  }

  /**
   * This action sheet is triggered by a long-press gesture.
   * It presents options to edit or delete the target object.
   *
   */
  async presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          ...this.ui.actions.edit,
          // TODO: Should this be modal model that update the object w/o the
          // need to navigate and associate an ID.
          handler: () => this.router.navigate(['accounts/edit', this.id()]),
        },
        {
          ...this.ui.actions.delete,
          handler: () => this.deleteAccount(),
        },
        {
          ...this.ui.actions.cancel,
        },
      ],
    });
    (await actionSheet).present();
  }

  /**
   * This action removes the target object from the manifest. It requires the
   * It requiresa the user confirm the intended action and presents and option
   * to undo the same action.
   *
   */
  private deleteAccount() {
    this.ui.confirm({ options: { confirm: 'Delete' } }).then((confirm) => {
      if (confirm) {
        this.accounts.update((accounts) =>
          accounts.filter((account) => account !== this.account())
        );

        this.ui.toast('danger', {
          message: `${this.account().issuer} removed!`,
          buttons: [
            {
              ...this.ui.actions.undo,
              handler: () =>
                this.accounts.update((accounts) => [
                  ...accounts,
                  this.account(),
                ]),
            },
          ],
        });
      }
    });
  }
}
