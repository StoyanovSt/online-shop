import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppState } from './states/app.state';
import { setIsAuth } from './states/auth/auth.actions';

import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private authSub: Subscription | null = null;
  private store = inject(Store<AppState>);

  constructor() {
    this.authSub = this.authService
      .isAuthenticated()
      .pipe(
        tap((isAuth: boolean) => this.store.dispatch(setIsAuth({ isAuth }))),
        map((isAuth: boolean) =>
          isAuth ? this.router.navigate(['/home']) : this.router.navigate(['/'])
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
