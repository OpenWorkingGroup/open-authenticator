import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UiService } from 'src/app/shared/services/ui.service';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';

import {
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
  protected nav = inject(NavController);
  protected ui = inject(UiService);
  private fb = inject(FormBuilder);

  newAccountForm = this.fb.group({
    secret: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    issuer: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    label: new FormControl('', { nonNullable: true }),
  });

  save() {}

  async cancel() {
    if (this.newAccountForm.dirty) {
      const close = await this.ui.confirm({
        message: { text: 'Are you sure? Unsasved changes will be lost.' },
      });
      if (close) {
        this.newAccountForm.reset();
        this.nav.back();
      }
    } else {
      this.newAccountForm.reset();
      this.nav.back();
    }
  }
}
