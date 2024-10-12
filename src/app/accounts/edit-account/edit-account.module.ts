import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  IonHeader,
  IonInput,
  IonToolbar,
  IonButton,
  IonTitle,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';

@NgModule({
  declarations: [],
  imports: [
    IonHeader,
    IonInput,
    IonToolbar,
    IonButton,
    IonTitle,
    IonButtons,
    IonContent,
    IonList,
    IonItem,
    ReactiveFormsModule,
  ],
  exports: [
    IonHeader,
    IonInput,
    IonToolbar,
    IonButton,
    IonTitle,
    IonButtons,
    IonContent,
    IonList,
    IonItem,
    ReactiveFormsModule,
  ],
})
export class EditAccountModule {}
