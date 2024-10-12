import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonAlert,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { AccountCardComponent } from './account-card/account-card.component';

@NgModule({
  declarations: [],
  imports: [
    AccountCardComponent,
    NgFor,
    IonAlert,
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
  exports: [
    AccountCardComponent,
    NgFor,
    IonAlert,
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
})
export class AccountsModule {}
