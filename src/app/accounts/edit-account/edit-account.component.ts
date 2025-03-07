import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { UiService } from 'src/app/shared/services/ui.service';
import { EditAccountModule } from './edit-account.module';

import {
  Validators,
  NonNullableFormBuilder,
  FormGroup,
  FormBuilder
} from '@angular/forms'; // Add FormBuilder import

import { AccountService } from 'src/app/shared/services/account.service';
import { Token } from 'src/app/shared/token';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  imports: [EditAccountModule],
  standalone: true
})
export class EditAccountComponent implements OnInit {
  private ui = inject(UiService);
  private route = inject(ActivatedRoute);
  private nav = inject(NavController);
  accounts = inject(AccountService).accounts;
  account = signal(<Token>{});
  id!: number;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inject FormBuilder
    this.form = this.fb.group({
      issuer: this.fb.control('', {
        validators: Validators.required
      }),
      label: this.fb.control('')
    });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.id = +this.route.snapshot.params?.['id'] || 0;

    this.account.set(computed(() => this.accounts()[this.id])());

    this.form.patchValue({
      issuer: this.account().issuer,
      label: this.account().label
    });

    this.form.valueChanges.subscribe((account) => {
      if (this.form.valid) {
        this.account.update(
          (account) =>
            new Token((<unknown>{ ...account, ...this.form.value }) as Token)
        );
      }
    });
  }

  /**
   *
   */
  save(): void {
    if (this.form.valid) {
      this.accounts.update(
        (accounts) => ((accounts[this.id] = this.account()), [...accounts])
      );
      this.form.reset();
      this.nav.back();
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
}
