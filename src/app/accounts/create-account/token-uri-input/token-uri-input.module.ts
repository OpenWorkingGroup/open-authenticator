import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    IonList,
    IonInput,
    IonItem,
    IonToggle,
    IonLabel,
    IonNote,
  ],
  exports: [
    CommonModule,
    IonList,
    IonInput,
    IonItem,
    IonToggle,
    IonLabel,
    IonNote,
  ],
})
export class TokenUriInputModule {}
