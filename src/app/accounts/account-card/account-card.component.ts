import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular/standalone';

import { AccountCardModule } from './account-card.module';
import { UiService } from 'src/app/shared/services/ui.service';
import { LongPressDirective } from 'src/app/shared/directives/long-press.directive';
import { AccountService } from 'src/app/shared/services/account.service';
import { TimeoutPipe } from 'src/app/shared/pipes/timeout.pipe';
import { CopyTokenComponent } from 'src/app/shared/components/copy-token/copy-token.component';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [
    AccountCardModule,
    CopyTokenComponent,
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
   * This action removes the target object from the manifest. It requires
   * the user confirm the intended action and presents and option
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
          icon: 'trash-outline',
          keyboardClose: true,
          buttons: [
            {
              ...this.ui.actions.undo,
              handler: () =>
                this.accounts.update((accounts) => [
                  this.account(),
                  ...accounts,
                ]),
            },
          ],
        });
      }
    });
  }
}
