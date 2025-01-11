import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { catchError, map, Observable, of, take, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }),
      catchError((error) => {
        console.error(error);
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
