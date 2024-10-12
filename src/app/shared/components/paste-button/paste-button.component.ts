import { Component, output } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

import { addIcons } from 'ionicons';
import { clipboardOutline } from 'ionicons/icons';

import { PasteButtonModule } from './paste-button.module';

@Component({
  selector: 'app-paste-button',
  templateUrl: './paste-button.component.html',
  styleUrls: ['./paste-button.component.scss'],
  standalone: true,
  imports: [PasteButtonModule],
})
export class PasteButtonComponent {
  clipboard = output<string>();

  constructor() {
    addIcons({ clipboardOutline });
  }

  // TODO: correctly implement error handling
  async pasteFromClipboard() {
    try {
      const { value } = await Clipboard.read();
      this.clipboard.emit(value);
    } catch (error) {
      throw Error(`Error reading from clipboard: ${error}`);
    }
  }
}
