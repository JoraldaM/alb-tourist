import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { API_URL } from '../api.token';
import { User } from '../models/user.model';
import { PaginatedData } from '../models/PaginatedData.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

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

  one(id: string): Observable<any> {
    return this.http.get(`${this.api}/api/User/${id}`);
  }

  create(payload: User): Observable<any> {
    return this.http.post(`${this.api}/api/User`, payload);
  }

  update(id: string, payload: User): Observable<any> {
    return this.http.put(`${this.api}/api/User/${id}`, payload);
  }
  updateProf(payload: User): Observable<any> {
    return this.http.put(`${this.api}/api/profile`, payload);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/api/User/${id}`);
  }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}
