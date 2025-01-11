import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('./user/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./user/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: LandingComponent },
];
