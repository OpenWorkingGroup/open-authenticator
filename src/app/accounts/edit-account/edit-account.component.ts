import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UiService } from 'src/app/shared/services/ui.service';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';

import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';
import { HOTP, TOTP } from 'otpauth';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  imports: [IonicBundleModule, ReactiveFormsModule],
  standalone: true,
})
export class EditAccountComponent implements OnInit {
  protected fb = inject(NonNullableFormBuilder);
  protected nav = inject(NavController);
  protected ui = inject(UiService);

  protected form = this.fb.group({
    issuer: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    label: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  private route = inject(ActivatedRoute);
  private accounts = inject(AccountService).accounts;
  private account = signal(<HOTP | TOTP>{});
  private id!: number;

  constructor() {
    this.form.valueChanges.subscribe((account) => {
      if (this.form.valid) {
        this.account.update(
          (account) => <HOTP | TOTP>{ ...account, ...this.form.value }
        );
      }
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    const account = computed(() => this.accounts()[this.id]);
    this.form.patchValue({ issuer: account().issuer, label: account().label });
  }

  save() {
    console.log(this.form.valid);
    if (this.form.valid) {
      this.accounts.update(
        (accounts) => ((accounts[this.id] = this.account()), [...accounts])
      );
      this.form.markAsPristine();
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
