import { effect, Injectable, signal } from '@angular/core';
import { HOTP, TOTP, URI } from 'otpauth';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accounts = signal<Array<HOTP | TOTP>>([]);

  constructor() {
    const seed = URI.parse(
      'otpauth://totp/Tloop%3A?issuer=Floop&secret=I65VU7K5ZQL7WB4E&algorithm=SHA1&digits=6&period=30'
    );
    this.accounts.set([<HOTP | TOTP>{ ...seed }]);

    effect(() => console.log(this.accounts()));
  }
}
