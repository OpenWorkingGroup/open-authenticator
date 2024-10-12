import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { CreateAccountModule } from './create-account.module';

import { UiService } from 'src/app/shared/services/ui.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { Token } from 'src/app/shared/token';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  imports: [CreateAccountModule],
})
export class CreateAccountComponent {
  private fb = inject(FormBuilder);
  private accounts = inject(AccountService);

  protected form = this.fb.group({
    secret: new FormControl('', {
      validators: Validators.required,
    }),
    issuer: new FormControl('', {
      validators: Validators.required,
    }),
    label: new FormControl('', { nonNullable: true }),
  });

  /**
   *
   * @param nav
   * @param ui
   */
  constructor(private nav: NavController, private ui: UiService) {}

  /**
   * Validate form input and append account
   * to accounts. The form is reset on save.
   *
   */
  save() {
    if (this.form.valid) {
      this.accounts.create((<unknown>this.form.value) as Token);
      this.form.markAsPristine(); // TODO: Is this needed? What is it doing?
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
