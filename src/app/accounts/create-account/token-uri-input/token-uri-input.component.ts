import { Component, inject, OnDestroy, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormService } from '../../../shared/services/form.service';
import { TokenUriInputModule } from './token-uri-input.module';
import { PasteButtonComponent } from '../../../shared/components/paste-button/paste-button.component';

import { URI } from 'otpauth';

export const TOKEN_URI_REGEX =
  /^otpauth:\/\/([ht]otp)\/(.+)\?([A-Z0-9.~_-]+=[^?&]*(?:&[A-Z0-9.~_-]+=[^?&]*)*)$/i;
@Component({
  selector: 'app-token-uri-input',
  templateUrl: './token-uri-input.component.html',
  styleUrls: ['./token-uri-input.component.scss'],
  standalone: true,
  imports: [TokenUriInputModule, ReactiveFormsModule, PasteButtonComponent],
})
export class TokenUriInputComponent implements OnDestroy {
  private fb = inject(FormBuilder);
  protected token = output<any>({ alias: 'authKeyUri' });

  protected form = this.fb.group({
    authKeyUri: new FormControl('', {
      validators: [Validators.pattern(TOKEN_URI_REGEX)],
    }),
  });

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
