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

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  imports: [IonicBundleModule, ReactiveFormsModule],
  standalone: true,
})
export class EditAccountComponent {
  protected nav = inject(NavController);
  protected ui = inject(UiService);
  private fb = inject(FormBuilder);

  editAccountForm = this.fb.group({
    issuer: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    label: new FormControl('', { nonNullable: true }),
  });

  constructor() {}

  save() {}

  async cancel() {
    if (this.editAccountForm.dirty) {
      const close = await this.ui.confirm({
        message: { text: 'Are you sure? Unsasved changes will be lost.' },
      });
      if (close) {
        this.editAccountForm.reset();
        this.nav.back();
      }
    } else {
      this.editAccountForm.reset();
      this.nav.back();
    }
  }
}
