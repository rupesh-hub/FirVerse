import {Routes} from '@angular/router';

export const routes: Routes = [
  // root redirect
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  // Lazy-loaded auth
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },

  // Lazy-loaded users
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then(m => m.USERS_ROUTES),
  },

  // Normal non-lazy routes
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./core/components/unauthorized/unauthorized.component')
        .then(m => m.UnauthorizedComponent)
  },
  {
    path: '404',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component')
        .then(m => m.NotFoundComponent)
  },

  // Fallback
  {path: '**', redirectTo: '404'},
];
