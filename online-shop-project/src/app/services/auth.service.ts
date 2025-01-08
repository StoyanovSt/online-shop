import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private JWT_KEY: string = 'auth_token';

  public isAuthenticated(): Observable<boolean> {
    return of<boolean>(Boolean(localStorage.getItem(this.JWT_KEY)));
  }
}
