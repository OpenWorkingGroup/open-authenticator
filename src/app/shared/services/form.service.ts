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
}
