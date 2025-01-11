import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../shared/components/item/item.component';
import { map } from 'rxjs';
import { Item } from '../shared/models/item.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CommonModule, ItemComponent],
})
export class HomeComponent {
  private dataService: DataService = inject(DataService);
  items$ = this.dataService.getItems();

  onAddItemToCart(itemId: string): void {
    this.items$ = this.items$.pipe(
      map((items: Item[]) => items.filter((item: Item) => item.id !== itemId))
    );
  }

  onRemoveItemFromCart(item: Item): void {
    this.items$ = this.items$.pipe(
      map((items: Item[]) => [...items, item])
    );
  }
}
