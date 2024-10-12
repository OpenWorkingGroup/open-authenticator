import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonText,
  IonRippleEffect,
} from '@ionic/angular/standalone';

@NgModule({
  declarations: [],
  imports: [IonContent, IonText, IonRippleEffect, RouterLink],
  exports: [IonContent, IonText, IonRippleEffect, RouterLink],
})
export class WelcomeModule {}
