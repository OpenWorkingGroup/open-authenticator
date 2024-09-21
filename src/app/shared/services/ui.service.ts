import { inject, Injectable } from '@angular/core';
import {
  ActionSheetController,
  ToastController,
  ToastOptions,
} from '@ionic/angular/standalone';

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
    cancel: { text: 'Cancel', role: 'cancel' },
    edit: { text: 'Edit', role: 'destructive' },
    delete: { text: 'Delete', role: 'destructive' },
    info: { text: 'More info', role: 'destructive' },
    undo: { text: 'Undo', role: 'destructive' },
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
  private actionSheetCtrl = inject(ActionSheetController);

  /**
   *
   * @param message
   * @returns
   */
  async confirm(message?: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: message?.body || 'Are you sure?',
      buttons: [
        { text: message?.options?.confirm || 'Confirm', role: 'confirm' },
        { text: message?.options?.cancel || 'Cancel', role: 'cancel' },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  }

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
