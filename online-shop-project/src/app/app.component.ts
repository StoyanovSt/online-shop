import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private authSub: Subscription | null = null;

  constructor() {
    this.authSub = this.authService
      .isAuthenticated()
      .pipe(
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
