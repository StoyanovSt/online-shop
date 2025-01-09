import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { AuthState } from './auth.state';

export const selectAuthState = (state: AppState) => state.authState;
export const selectIsAuth = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.isAuthenticated
);
