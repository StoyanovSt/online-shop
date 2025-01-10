import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { JWT_KEY } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): Observable<boolean> {
    return of<boolean>(Boolean(localStorage.getItem(JWT_KEY)));
  }
}
