import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'listings',
    loadComponent: () => import('./pages/listings/listings.component').then(m => m.ListingsComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent)
  },
  {
    path: 'reservations',
    loadComponent: () => import('./pages/reservations/reservations.component').then(m => m.ReservationsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
