import { inject, Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private readonly styles = {
    danger: { color: 'danger', icon: 'alert-circle-outline' },
    info: { icon: 'clipboard-outline' },
  };

  readonly actions = {
    close: { text: 'Close', role: 'cancel' },
    info: { text: 'More info', role: 'destructive' },
  };

  // Default toast styles
  private readonly options = {
    toast: {
      position: 'bottom' as 'bottom' | 'top' | 'middle',
      positionAnchor: 'footer' as 'footer' | 'header',
      duration: 2500,
    },
  };

  private toastCtrl = inject(ToastController);

  /**
   * Displays a toast message with the given style and options.
   * @param style The style of the toast ('danger', etc.).
   * @param options Additional options to customize the toast.
   */
  async toast(
    style: 'danger' | keyof typeof this.styles,
    options: ToastOptions = {}
  ) {
    const toast = await this.toastCtrl.create({
      ...this.options.toast,
      ...(this.styles[style] || {}),
      ...options,
    });
    await toast.present();
  }
}
