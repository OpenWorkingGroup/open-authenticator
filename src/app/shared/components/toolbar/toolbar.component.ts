import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonSearchbar } from '@ionic/angular/standalone';

import { IonicBundleModule } from '../../ionic-bundle.module';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [IonSearchbar, IonicBundleModule, RouterLink],
  standalone: true,
})
export class ToolbarComponent {
  filter = output<string>();

  constructor() {
    addIcons({ addOutline });
  }
}
