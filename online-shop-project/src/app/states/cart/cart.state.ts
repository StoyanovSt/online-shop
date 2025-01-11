import { Item } from '../../shared/models/item.interface';

export interface CartState {
  items: Item[];
}

export const initialCartState: CartState = {
  items: [],
};
