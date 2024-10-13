import { Component, input, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { Clipboard } from '@capacitor/clipboard';
import { timer } from 'rxjs';

import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { copyOutline, clipboardOutline } from 'ionicons/icons';

import { TokenPipe } from '../../pipes/token.pipe';

@Component({
  selector: 'app-copy-token',
  templateUrl: './copy-token.component.html',
  styleUrls: ['./copy-token.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, NgIf, TokenPipe],
})
export class CopyTokenComponent {
  clicked = signal(false);
  value = input.required<string>();

  constructor() {
    addIcons({ copyOutline, clipboardOutline });
  }

  /**
   * Copy token to system clipboard.
   *
   * @param $event
   * @param string
   */
  async copyToClipboard($event: any, string: string) {
    try {
      this.clicked.set(true);
      timer(1000).subscribe(() => this.clicked.set(false));
      await Clipboard.write({ string });
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}
