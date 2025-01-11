import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppState } from './states/app.state';
import { setIsAuth } from './states/auth/auth.actions';
import { AlertComponent } from './shared/alert/alert.component';

import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    CommonModule,
    AlertComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private authSub: Subscription | null = null;
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private store = inject(Store<AppState>);
  loadingService = inject(LoadingService);

  constructor() {
    this.authSub = this.authService
      .isAuthenticated()
      .pipe(
        tap((isAuth: boolean) => this.store.dispatch(setIsAuth({ isAuth }))),
        map((isAuth: boolean) => {
          if (!isAuth) this.router.navigate(['/']);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.authSub && this.authSub.unsubscribe();
  }
}
