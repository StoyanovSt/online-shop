import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Item } from '../../models/item.interface';
import { AppState } from '../../../states/app.state';
import { addItem, removeItem } from '../../../states/cart/cart.actions';

import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
  imports: [MatIconModule, CommonModule],
})
export class ItemComponent {
  @Input({ required: true }) item!: Item;
  @Output() addedItemId = new EventEmitter<string>();
  @Output() removedItem = new EventEmitter<Item>();

  private store = inject(Store<AppState>);

  addItemToCart(item: Item): void {
    item.isAddedToCart = true;
    this.store.dispatch(addItem({ item }));
    this.addedItemId.emit(item.id);
  }

  removeFromCart(item: Item): void {
    item.isAddedToCart = false;
    this.store.dispatch(removeItem({ id: item.id }));
    this.removedItem.emit(item);
  }
}
