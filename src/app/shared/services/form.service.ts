import { Injectable, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

export const TOKEN_URI_REGEX =
  /^otpauth:\/\/([ht]otp)\/(.+)\?([A-Z0-9.~_-]+=[^?&]*(?:&[A-Z0-9.~_-]+=[^?&]*)*)$/i;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private fb = inject(NonNullableFormBuilder);

  /**
   *
   */
  private authKeyUri = new FormControl('', {
    nonNullable: true,
    validators: [Validators.pattern(TOKEN_URI_REGEX)],
  });

  /**
   *
   */
  private issuer = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  });

  /**
   *
   */
  private secret = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  });

  /**
   *
   */
  private label = new FormControl('', { nonNullable: true });

  /**
   * TODO: Why are `nonNullable` properties required on each control
   * on a NonNullableFormBuilder object?
   */
  accountForm = this.fb.group({
    secret: this.secret,
    issuer: this.issuer,
    label: this.label,
  });

  /**
   *
   */
  authKeyUriForm = this.fb.group({
    authKeyUri: this.authKeyUri,
  });
}
