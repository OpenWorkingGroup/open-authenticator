import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

import { UiService } from 'src/app/shared/services/ui.service';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';
import { AccountService } from 'src/app/shared/services/account.service';

import { TokenUriInputComponent } from 'src/app/shared/components/token-uri-input/token-uri-input.component';
import { PasteButtonComponent } from 'src/app/shared/components/paste-button/paste-button.component';
import { Token } from 'src/app/shared/token';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  imports: [
    IonicBundleModule,
    ReactiveFormsModule,
    PasteButtonComponent,
    TokenUriInputComponent,
  ],
})
export class CreateAccountComponent {
  private nav = inject(NavController);
  private ui = inject(UiService);
  private accounts = inject(AccountService).accounts;
  protected form = inject(FormService).accountForm;

  /**
   * Validate form input and append account
   * to accounts. The form is reset on save.
   *
   */
  save() {
    if (this.form.valid) {
      this.accounts.update((accounts) => [
        new Token((<unknown>this.form.value) as Token),
        ...accounts,
      ]);
      this.form.markAsPristine();
      this.form.reset();
    }

    // Close the form if it's not been touched.
    if (this.form.pristine) {
      this.nav.navigateForward('/');
    } else {
      this.form.markAllAsTouched();
    }
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

  /**
   * Parses a Google Authenticator key string to
   * HOTP/TOTP object and populates the form.
   *
   * @param token
   */
  patchFromAuthKeyURI(token: any) {
    this.form.patchValue(token);
    this.form.markAsDirty();
  }

  /**
   * TODO: Describe this method.
   *
   * @param value
   */
  pasteAction(value: any) {
    this.form.patchValue({ secret: value });
    this.form.markAsDirty();
  }
}
