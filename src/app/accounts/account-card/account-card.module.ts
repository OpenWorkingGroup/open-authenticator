import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonProgressBar,
} from '@ionic/angular/standalone';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar,
  ],
  exports: [
    CommonModule,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar,
  ],
})
export class AccountCardModule {}
