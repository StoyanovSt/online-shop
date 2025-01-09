import { Component, inject } from '@angular/core';
import { ItemComponent } from '../shared/components/item/item.component';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Item } from '../shared/models/item.interface';

@Component({
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
  imports: [ItemComponent, CommonModule],
})
export class LandingComponent {
  private dataService: DataService = inject(DataService);
  publicItems$ = this.dataService
    .getItems()
    .pipe(map((items: Item[]) => items.filter((item: Item) => item.isPublic)));
}
