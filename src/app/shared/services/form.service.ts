import { Injectable, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private fb = inject(NonNullableFormBuilder);

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
}
