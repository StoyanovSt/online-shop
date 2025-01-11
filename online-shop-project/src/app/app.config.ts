import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';

import { authReducer } from './states/auth/auth.reducer';
import { cartReducer } from './states/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'authState', reducer: authReducer }),
    provideState({ name: 'cartState', reducer: cartReducer }),
  ],
};
