import { inject } from '@angular/core';
import { ResolveFn, Router, RedirectCommand } from '@angular/router';
import { AccountService } from './shared/services/account.service';

import { HOTP, TOTP } from 'otpauth';

export const accountResolver: ResolveFn<TOTP | HOTP | undefined> = async (
  route,
  state
) => {
  const router = inject(Router);
  const accounts = inject(AccountService).accounts;

  try {
    return await accounts().at(route.params['id']);
  } catch {
    return new RedirectCommand(router.parseUrl('/'));
  }
};
