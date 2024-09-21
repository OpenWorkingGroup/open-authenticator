import { Injectable, signal } from '@angular/core';
import { HOTP, TOTP, URI } from 'otpauth';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accounts = signal<Array<HOTP | TOTP>>([]);

  constructor() {
    const seed = URI.parse(
      'otpauth://totp/user@example.com?issuer=Example%20ServiceS&secret=I65VU7K5ZQL7WB4E&algorithm=SHA1&digits=6&period=30'
    );
    this.accounts.set([<HOTP | TOTP>{ ...seed }]);
  }
}
