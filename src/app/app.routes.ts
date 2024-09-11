import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome!',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: 'accounts',
    title: 'Accounts',
    loadComponent: () =>
      import('./accounts/accounts.page').then((m) => m.AccountsPage),
  },
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
];
