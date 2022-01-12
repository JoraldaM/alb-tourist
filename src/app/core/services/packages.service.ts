import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API_URL } from '../api.token';
import { PaginatedData } from '../models/PaginatedData.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Package } from '../models/packageRes.model';

@Injectable({ providedIn: 'root' })
export class PackageService {
  private data = new BehaviorSubject<PaginatedData<Package> | null>(null);

  constructor(
    @Inject(API_URL) private api: string,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  loadPackages(
    pageNumber: number,
    pageSize: number,
    nameFilter: string | null
  ): Observable<PaginatedData<Package>> {
    let params = new HttpParams();
    if (nameFilter) {
      params = params.append('name', nameFilter);
    }
    params = params.append('PageNumber', pageNumber);
    params = params.append('PageSize', pageSize);
    return this.http
      .get<PaginatedData<Package>>(`${this.api}/api/Package`, { params })
      .pipe(tap(x => console.log(x)));
  }

  getById(id: string): Observable<any> {
    return this.http.get<Package>(`${this.api}/api/Package/${id}`);
  }

  createPackage(payload: Package): Observable<any> {
    return this.http.post(`${this.api}/api/Package`, payload);
  }

  updatePackage(id: number, payload: Package): Observable<any> {
    return this.http.put(`${this.api}/api/Package/${id}`, payload);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/api/Package/${id}`);
  }

  getFavorite(): Observable<any> {
    return this.http.get(`${this.api}/api/Favorite`);
  }

  addFavorites(packageId: number, payload: Package): Observable<any> {
    return this.http.post(`${this.api}/api/Favorite/${packageId}`, payload);
  }

  removeFavorite(packageId: number): Observable<any> {
    return this.http.delete(`${this.api}/api/Favorite/${packageId}`);
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
