import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accounts = signal([
    {
      issuer: 'GitHub',
      label: 'mrjonleek@gmail.com',
    },
  ]);
  constructor() {}
}
