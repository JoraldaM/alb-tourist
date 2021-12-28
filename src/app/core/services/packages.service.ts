import { Pagination } from 'src/app/core/models/pagination.model';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';
// import { createParamsFromObject } from '../utils/create-params-from-object';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Package } from '../models/package.model';
import { API_URL } from '../api.token';

export interface PackagesState {
  filters: any;
  data: Package[];
  pagination: Pagination;
  error: string | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: PackagesState = {
  data: [],
  pagination: {
    currentPage: 0,
    totalPages: 0,
    pageSize: 20,
    totalCount: 0,
    hasPrevious: false,
    hasNext: false,
  },
  error: null,
  loading: false,
  loaded: false,
  filters: undefined,
  //   pagination: undefined,
};

@Injectable({ providedIn: 'root' })
export class PackageService {
  private readonly state = new BehaviorSubject<PackagesState>(initialState);
  readonly state$ = this.state.asObservable().pipe(distinctUntilChanged());

  get currentState(): PackagesState {
    return this.state.getValue();
  }

  constructor(private http: HttpClient, @Inject(API_URL) private api: string) {}

  getProducts(): Observable<any> {
    const path = `${this.api}/Packages`;
    // const params = createParamsFromObject(data)
    //   .append('page', pagination.currentPage + '')
    //   .append('pageSize', pagination.pageSize + '');

    return this.http.get<any>(path);
  }

  private setData(data: Package[], pagination: Pagination): void {
    this.state.next({
      ...this.currentState,
      data,
      pagination,
      loading: false,
      loaded: true,
      error: null,
    });
  }

  private setError(error: string): void {
    this.state.next({
      ...this.currentState,
      error,
      loading: false,
      loaded: true,
      data: [],
    });
  }

  //   loadPackages(pagination?: Partial<Pagination>): Observable<Package> {
  //     const currentPagination = this.currentState.pagination;
  //     const newPagination = pagination
  //       ? { ...currentPagination, ...pagination }
  //       : currentPagination;

  //     this.state.next({
  //       ...this.currentState,
  //       pagination: newPagination,
  //       loading: true,
  //       error: null,
  //       loaded: false,
  //     });
  //     const { pageSize, currentPage } = this.currentState.pagination;

  //     return this.getPackages(this.currentState.pagination).pipe(
  //       tap(res => {
  //         const samplePagination: Pagination = {
  //           pageSize: res.per_page,
  //           currentPage: res.current_page,
  //           totalCount: res.total,
  //           totalPages: res.totalPages,
  //           hasPrevious: false,
  //           hasNext: false,
  //         };

  //         return this.setData(res.data, samplePagination);
  //       }),
  //       catchError(error => {
  //         this.setError('An error has occurred. Please try again later!');
  //         return of(error);
  //       })
  //     );
  //   }

  loadPackages(): Observable<any> {
    return this.http.get(`${this.api}/api/Package`);
    // .pipe(take(1))
    // .subscribe(
    //   response => {
    //     this.users.next(response);
    //   },
    //   error => {
    //     this.openSnackBar(error.message, 'danger-alert');
    //   }
    // );
  }

  getById(id: string): Observable<any> {
    return this.http.get<Package>(`${this.api}/api/Package/${id}`);
  }

  createPackage(payload: Package): Observable<Package> {
    return this.http.post<Package>(`${this.api}/api/Package`, payload);
  }

  updatePackage(id: number, payload: Package): Observable<Package> {
    return this.http.patch<Package>(`${this.api}/api/Package/${id}`, payload);
  }
}
