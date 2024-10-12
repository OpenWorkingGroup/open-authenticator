import { Injectable, signal } from '@angular/core';
import { URI } from 'otpauth';

import { Token } from '../token';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accounts = signal<Array<Token>>([]);

  constructor() {
    const seed = new Token(
      URI.parse(
        'otpauth://totp/user@example.com?issuer=Example%20Service&secret=I65VU7K5ZQL7WB4E&algorithm=SHA1&digits=6&period=30'
      )
    );

    this.accounts.set([seed]);
  }

  public create(account: Token): void {
    return this.accounts.update((accounts) => [
      new Token(account),
      ...accounts,
    ]);
  }
}
