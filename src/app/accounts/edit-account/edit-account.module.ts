import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonInput
} from '@ionic/angular/standalone';

@NgModule({
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonInput
  ],
  exports: [
    ReactiveFormsModule,
    IonInput,
    IonList,
    IonItem,
    IonContent,
    IonTitle,
    IonButton,
    IonButtons,
    IonToolbar,
    IonHeader
  ]
})
export class EditAccountModule {}
