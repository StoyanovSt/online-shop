import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { JWT_KEY } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): Observable<boolean> {
    return of<boolean>(!!localStorage.getItem(JWT_KEY))
      .pipe(
        delay(500)
      );
  }
}
