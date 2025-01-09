import { createAction, props } from '@ngrx/store';

export const setIsAuth = createAction(
  '[Auth] Set Is Authenticated',
  props<{ isAuth: boolean }>()
);
