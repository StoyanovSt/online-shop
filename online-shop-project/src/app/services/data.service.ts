import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/models/item.interface';
import { items } from '../shared/data/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public getItems(): Observable<Item[]> {
    return of<Item[]>(items);
  }
}
