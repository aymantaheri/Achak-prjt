import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ListingsComponent } from './pages/listings/listings';
import { ProfileComponent } from './pages/profile/profile';
import { FavoritesComponent } from './pages/favorites/favorites';
import { ReservationsComponent } from './pages/reservations/reservations';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '**', redirectTo: '' },
];
