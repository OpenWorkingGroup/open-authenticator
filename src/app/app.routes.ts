import { Routes } from '@angular/router';
import { accountResolver } from './account.resolver';

export const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome!',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: '',
    title: 'Accounts',
    loadComponent: () =>
      import('./accounts/accounts.page').then((m) => m.AccountsPage),
  },
  {
    path: 'accounts/edit/:id',
    title: 'Edit Account',
    resolve: { account: accountResolver },
    loadComponent: () =>
      import('./accounts/edit-account/edit-account.component').then(
        (m) => m.EditAccountComponent
      ),
  },
  {
    path: 'mint',
    title: 'Mint New Account',
    loadComponent: () =>
      import('./accounts/create-account/create-account.component').then(
        (m) => m.CreateAccountComponent
      ),
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];
