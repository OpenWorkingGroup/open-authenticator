import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  IonList,
  IonInput,
  IonItem,
  IonToggle,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonList,
    IonInput,
    IonItem,
    IonToggle,
    IonLabel,
    IonNote,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonList,
    IonInput,
    IonItem,
    IonToggle,
    IonLabel,
    IonNote,
  ],
})
export class TokenUriInputModule {}
