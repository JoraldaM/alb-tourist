import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NonAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.auth$.pipe(
      pluck('token'),
      map(token => {
        if (!token) {
          return true;
        }
        this.router.navigateByUrl('/home');
        return false;
      })
    );
  }
}
