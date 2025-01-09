import { createReducer, on } from '@ngrx/store';

import { initialAuthState } from './auth.state';
import { setIsAuth } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(setIsAuth, (state, { isAuth }) => ({ ...state, isAuthenticated: isAuth }))
);
