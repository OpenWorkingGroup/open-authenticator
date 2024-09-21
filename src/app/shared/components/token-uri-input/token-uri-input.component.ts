import { Component, inject, OnDestroy, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormService, TOKEN_URI_REGEX } from '../../services/form.service';
import { IonicBundleModule } from '../../ionic-bundle.module';
import { PasteButtonComponent } from '../paste-button/paste-button.component';

import { URI } from 'otpauth';

@Component({
  selector: 'app-token-uri-input',
  templateUrl: './token-uri-input.component.html',
  styleUrls: ['./token-uri-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicBundleModule,
    ReactiveFormsModule,
    PasteButtonComponent,
  ],
})
export class TokenUriInputComponent implements OnDestroy {
  protected form = inject(FormService).authKeyUriForm;
  protected token = output<any>({ alias: 'authKeyUri' });

  constructor() {
    this.form.valueChanges.subscribe(({ authKeyUri }) => {
      this.form.markAllAsTouched();
      if (this.form.valid) {
        if (authKeyUri) {
          try {
            const token = URI.parse(authKeyUri);
            this.token.emit({ ...token, secret: token.secret.base32 });
          } catch (e) {
            throw Error(`${e}`);
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.form.reset({}, { emitEvent: false });
  }

  /**
   *
   * @param value
   */
  pasteAction(value: string) {
    this.form.patchValue({ authKeyUri: value });
  }
}
