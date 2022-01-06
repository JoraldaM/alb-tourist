import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { API_URL } from '../api.token';
import { User } from '../models/user.model';
import { PaginatedData } from '../models/PaginatedData.model';
import { updateUser } from '../models/updateUser.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = new BehaviorSubject<User[]>([]);
  private data = new BehaviorSubject<PaginatedData<User> | null>(null);
  users$ = this.users.asObservable();
  //  nameFilter: null;

  constructor(
    @Inject(API_URL) private api: string,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  loadUsers(
    pageNumber: number,
    pageSize: number,
    nameFilter: string | null
  ): Observable<PaginatedData<User>> {
    let params = new HttpParams();
    if (nameFilter) {
      params = params.append('name', nameFilter);
    }
    params = params.append('PageNumber', pageNumber);
    params = params.append('PageSize', pageSize);
    return this.http
      .get<PaginatedData<User>>(`${this.api}/api/User`, { params })
      .pipe(tap(x => console.log(x)));
  }

  one(id: number): Observable<any> {
    return this.http.get(`${this.api}/api/User/${id}`);
  }

  create(payload: User): Observable<any> {
    return this.http.post(`${this.api}/api/User`, payload);
  }

  update(id: number, payload: User): Observable<any> {
    return this.http.put(`${this.api}/api/User/${id}`, payload);
  }
  updateProf(id: number, payload: User): Observable<any> {
    return this.http.put(`${this.api}/api/profile/`, payload);
  }

   delete(id: number):Observable<any>{
     return this.http.delete(`${this.api}/api/User/${id}`);}
  // delete(id: number): void {
  //   this.http
  //     .delete(`${this.api}/api/User/${id}`)
  //     .pipe(take(1))
  //     .subscribe(
  //       value => {
  //         this.users$ = this.users$.pipe(
  //           map(users => users.filter(u => u.id !== id))
  //         );
  //         this.router.navigate(['dashboard/users']).then();
  //         this.openSnackBar('User deleted successfully', 'success-snackbar');
  //       },
  //       error => {
  //         if (error instanceof HttpErrorResponse) {
  //           if (error.status === 401) {
  //             this.openSnackBar(error.error.message, 'alert-snackbar');
  //           }
  //           if (typeof error.error.message === 'string') {
  //             this.openSnackBar(error.error.message, 'alert-snackbar');
  //           }
  //         }
  //       }
  //     );
  // }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}
