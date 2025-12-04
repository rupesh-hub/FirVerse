import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./users-list/users-list.component').then(m => m.UsersListComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then(m => m.ProfileComponent),
  },
  {
    path: 'change-password',
    loadComponent: () =>
      import('./change-password/change-password.component').then(m => m.ChangePasswordComponent),
  }
];
