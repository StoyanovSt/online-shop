import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartState } from './cart.state';

export const selectCartState = (state: AppState) => state.cartState;
export const selectItems = createSelector(
  selectCartState,
  (cartState: CartState) => cartState.items
);
