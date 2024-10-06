import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { UiService } from 'src/app/shared/services/ui.service';
import { IonicBundleModule } from 'src/app/shared/ionic-bundle.module';

import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

import { AccountService } from 'src/app/shared/services/account.service';
import { Token } from 'src/app/shared/token';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  imports: [IonicBundleModule, ReactiveFormsModule],
  standalone: true,
})
export class EditAccountComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private ui = inject(UiService);
  private route = inject(ActivatedRoute);
  private nav = inject(NavController);
  private accounts = inject(AccountService).accounts;
  private account = signal(<Token>{});
  private id!: number;

  protected form = this.fb.group({
    issuer: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    label: new FormControl('', {
      nonNullable: true,
    }),
  });

  /**
   *
   */
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.account.set(computed(() => this.accounts()[this.id])());

    this.form.patchValue({
      issuer: this.account().issuer,
      label: this.account().label,
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
  protected save(): void {
    if (this.form.valid) {
      const account = computed(() => this.account());
      console.log(account());
      this.accounts.update(
        (accounts) => ((accounts[this.id] = account()), [...accounts])
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
