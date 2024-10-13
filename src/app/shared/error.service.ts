import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { UiService } from './services/ui.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private ui: UiService) {}

  handleError(error: any): void {
    // Cast error to string for logging.
    const message = `${error}`;

    // Log the error (you can also send this to a server or analytics service)
    console.error('Global Error Caught:', error);

    // Show a user-friendly notification
    this.ui.toast('warning', { message });
  }
}
