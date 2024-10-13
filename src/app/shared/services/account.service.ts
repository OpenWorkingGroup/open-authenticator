import { effect, inject, Injectable, signal } from '@angular/core';
import { URI } from 'otpauth';

import { StorageService } from './storage.service';
import { Token } from '../token';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private static readonly initialized = signal(false);

  private readonly database = inject(StorageService);
  public readonly accounts = signal<Array<Token>>([]);

  constructor() {
    // otpauth://totp/user@example.com?issuer=Example%20Service&secret=I65VU7K5ZQL7WB4E&algorithm=SHA1&digits=6&period=30
    this.loadAccounts();
  }

  /**
   *
   */
  private async loadAccounts(): Promise<void> {
    this.accounts.set((await this.database.read()).map(URI.parse));
    AccountService.initialized.set(true);
  }

  /**
   *
   */
  private readonly autoSaveAccounts = effect(() => {
    if (AccountService.initialized()) {
      this.database.write(
        this.accounts().map((accounts) => accounts.toString())
      );
    }
  });

  /**
   *
   * @param account
   */
  public create(account: Token): void {
    this.accounts.update((accounts) => [new Token(account), ...accounts]);
  }
}
