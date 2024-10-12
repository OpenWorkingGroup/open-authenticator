import { Component, output } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';

import { IonicBundleModule } from '../../ionic-bundle.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [IonSearchbar, IonicBundleModule],
  standalone: true,
})
export class ToolbarComponent {
  protected filter = output<string>();
}
