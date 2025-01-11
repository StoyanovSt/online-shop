import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../states/app.state';
import { selectIsAuth } from '../states/auth/auth.selector';
import { JWT_KEY } from '../shared/constants/constants';
import { setIsAuth } from '../states/auth/auth.actions';
import { selectItems } from '../states/cart/cart.selector';
import { Item } from '../shared/models/item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
})
export class HeaderComponent {
  private store = inject(Store<AppState>);
  private router: Router = inject(Router);
  isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuth);
  userEmail = signal<string>(localStorage.getItem(JWT_KEY) || '');
  items$: Observable<Item[]> = this.store.select(selectItems);

  logout(): void {
    localStorage.removeItem(JWT_KEY);
    this.store.dispatch(setIsAuth({ isAuth: false }));
    this.router.navigate(['/']);
  }
}
