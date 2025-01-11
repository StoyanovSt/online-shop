import { createAction, props } from '@ngrx/store';
import { Item } from '../../shared/models/item.interface';

export const addItem = createAction(
  '[Cart] Add item to cart',
  props<{ item: Item }>()
);

export const removeItem = createAction(
  '[Cart] Remove item from cart',
  props<{ id: string }>()
);
