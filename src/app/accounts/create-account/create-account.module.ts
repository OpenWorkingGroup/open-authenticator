import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  IonHeader,
  IonInput,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
  IonToggle,
  IonNote,
} from '@ionic/angular/standalone';

import { TokenUriInputComponent } from 'src/app/accounts/create-account/token-uri-input/token-uri-input.component';
import { PasteButtonComponent } from 'src/app/shared/components/paste-button/paste-button.component';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonInput,
    IonToolbar,
    IonButtons,
    IonContent,
    IonButton,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonToggle,
    IonNote,
    PasteButtonComponent,
    TokenUriInputComponent,
  ],
  exports: [
    ReactiveFormsModule,
    IonHeader,
    IonInput,
    IonToolbar,
    IonButtons,
    IonContent,
    IonButton,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonToggle,
    IonNote,
    PasteButtonComponent,
    TokenUriInputComponent,
  ],
})
export class CreateAccountModule {}
