import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map, pluck } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.auth$.pipe(
      pluck('access_token'),
      map(token => {
        if (token) {
          return true;
        }
        this.router.navigate(['auth/login']).then();
        return false;
      })
    );
  }
}
