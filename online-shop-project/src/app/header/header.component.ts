import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectIsAuth } from '../states/auth/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  private store = inject(Store<AppState>);
  isAuthenticated$ = this.store.select(selectIsAuth);
}
