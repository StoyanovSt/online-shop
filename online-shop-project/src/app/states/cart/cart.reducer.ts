import { createReducer, on } from '@ngrx/store';
import { initialCartState } from './cart.state';
import { addItem, removeItem } from './cart.actions';

export const cartReducer = createReducer(
    initialCartState,
    on(addItem, (state, { item }) => ({ ...state, items: [...state.items, item] })),
    on(removeItem, (state, { id }) => ({...state, items: state.items.filter(item => item.id !== id)}))
);
