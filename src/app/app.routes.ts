import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome!',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
