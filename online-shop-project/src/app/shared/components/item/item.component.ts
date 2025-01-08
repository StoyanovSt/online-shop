import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
})
export class ItemComponent {
  @Input({ required: true }) item!: Item;
}
