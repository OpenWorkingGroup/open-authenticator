import { NgModule } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRippleEffect,
  IonIcon,
  IonText,
  IonFooter,
} from '@ionic/angular/standalone';

@NgModule({
  declarations: [],
  imports: [
    IonFooter,
    IonText,
    IonIcon,
    IonRippleEffect,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
  exports: [
    IonFooter,
    IonText,
    IonIcon,
    IonRippleEffect,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class IonicBundleModule {}
