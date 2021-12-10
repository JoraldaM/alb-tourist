// import { Inject, Injectable } from '@angular/core';
// import { Credentials } from '@core/models/credentials.model';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
// import { LoginResponse } from '@core/models/LoginResponse';
// import { Router } from '@angular/router';
// import { User } from '../models/user.model';
// import { API_URL } from '../api.token';
// import { Credentials } from '../models/credentials.model';
// import { LoginResponse } from '../models/LoginResponse';
// import { CreateAdminPayload } from '@core/models/CreateAdminPayload';

// export interface AuthState {
//   id: number | null;
//   name: string | null;
//   email: string | null;
//   role: string | null; // admin, user
//   token: string | null;
// }

// export const initialState: AuthState = {
//   id: null,
//   name: null,
//   email: null,
//   role: null,
//   token: null,
// };

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   constructor(
//     @Inject(API_URL) private api: string,
//     private http: HttpClient,
//     private router: Router
//   ) {}

//   private auth = new BehaviorSubject<AuthState>(this.getLocalState());
//   public auth$ = this.auth.asObservable().pipe(distinctUntilChanged());

//   get state(): AuthState {
//     return this.auth.getValue();
//   }

//   get role(): string | null {
//     return this.state.role;
//   }

//   profile$ = this.http.get<User>(`${this.api}/api/user`);

//   public getLocalState(): AuthState {
//     const localState = localStorage.getItem('auth');
//     if (localState) {
//       return JSON.parse(localState) as AuthState;
//     }
//     return initialState;
//   }

//   login(credentials: Credentials): Observable<LoginResponse> {
//     const path = `${this.api}/api/Auth/login`;
//     return this.http.post<LoginResponse>(path, credentials).pipe(
//       tap(data => {
//         this.auth.next(data);
//         localStorage.setItem('auth', JSON.stringify(data));
// this.router.navigateByUrl('/dashboard').then();
//       })
//     );
//   }

//   logout(): void {
//     localStorage.removeItem('auth');
//     this.auth.next(initialState);
//     this.router.navigateByUrl('auth/login').then();
//   }

// }
