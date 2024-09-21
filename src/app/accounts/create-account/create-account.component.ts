import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

import { UiService } from 'src/app/shared/services/ui.service';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';
import { AccountService } from 'src/app/shared/services/account.service';
import { TOTP } from 'otpauth';

export const TOKEN_URI_REGEX =
  /^otpauth:\/\/([ht]otp)\/(.+)\?([A-Z0-9.~_-]+=[^?&]*(?:&[A-Z0-9.~_-]+=[^?&]*)*)$/i;

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  imports: [IonicBundleModule, ReactiveFormsModule],
})
export class CreateAccountComponent {
  private nav = inject(NavController);
  private ui = inject(UiService);
  private accounts = inject(AccountService).accounts;

  protected form = inject(FormService).accountForm;

  /**
   * Validate form input and append account
   * to accounts. The form is reset form on save.
   *
   */
  save() {
    if (this.form.valid) {
      this.accounts.update((accounts) => [
        new TOTP(this.form.value),
        ...accounts,
      ]);
      this.form.markAsPristine();
      this.form.reset();
    }

    this.form.markAllAsTouched();
  }

  /**
   * Confirm data loss when canceling an
   * incomplete form. The form will reset when
   * canceled.
   *
   */
  async cancel() {
    if (this.form.dirty) {
      if (await this.ui.confirm()) {
        this.form.reset();
        this.nav.back();
      }
    } else {
      this.form.reset();
      this.nav.back();
    }
  }
}
