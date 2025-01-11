import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppState } from '../states/app.state';
import { Item } from '../shared/models/item.interface';
import { selectItems } from '../states/cart/cart.selector';
import { ItemComponent } from '../shared/components/item/item.component';

import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [CommonModule, ItemComponent],
})
export class CartComponent {
  private store = inject(Store<AppState>);
  items$: Observable<Item[]> = this.store.select(selectItems);
  totalPrice$ = this.items$.pipe(
    map((items: Item[]) =>
      items.reduce((acc: number, item: Item) => {
        acc += item.price;
        return acc;
      }, 0)
    )
  );
}
