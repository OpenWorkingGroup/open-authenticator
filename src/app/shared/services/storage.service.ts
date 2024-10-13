import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly database = { key: environment.keystore };

  /**
   *
   * @returns
   */
  public async read(): Promise<any> {
    try {
      const { value } = await Preferences.get({ ...this.database });
      return JSON.parse(value || '[]');
    } catch (error) {
      // TODO: Implement true error handling.
      console.error('Error retrieving accounts:', error);
    }
  }

  /**
   *
   * @param payload
   */
  public async write(payload: any): Promise<any | boolean> {
    try {
      return await Preferences.set({
        ...this.database,
        value: JSON.stringify(payload),
      });
    } catch (error) {
      // TODO: Implement true error handling.
      return console.error('Error retrieving accounts:', error);
    }
  }
}
