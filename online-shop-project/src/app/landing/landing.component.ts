import { Component, inject } from '@angular/core';
import { ItemComponent } from '../shared/components/item/item.component';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
  imports: [ItemComponent, CommonModule]
})
export class LandingComponent {
  public dataService: DataService = inject(DataService);
}
