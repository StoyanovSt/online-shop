import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../shared/components/item/item.component';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CommonModule, ItemComponent]
})
export class HomeComponent {
  public dataService: DataService = inject(DataService);  
}
