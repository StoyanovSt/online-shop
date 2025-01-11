import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Item } from '../../models/item.interface';
import { AppState } from '../../../states/app.state';
import { addItem } from '../../../states/cart/cart.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
  imports: [MatIconModule],
})
export class ItemComponent {
  @Input({ required: true }) item!: Item;
  private store = inject(Store<AppState>);

  addItemToCart(item: Item): void {
    this.store.dispatch(addItem({ item }));
  }
}
