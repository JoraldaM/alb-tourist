// import { Inject, Injectable } from '@angular/core';

// // import { Pagination } from '../models/pagination.model';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';
// // import { createParamsFromObject } from '../utils/create-params-from-object';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Package } from '../models/package.model';
// import { Pagination } from '../models/pagination.model';


// export interface PackagesState {
//   filters: any;
//   data: Package[];
//   pagination: Pagination;
//   error: string | null;
//   loading: boolean;
//   loaded: boolean;
// }

// const initialState: PackagesState = {
//   data: [],
//   pagination: { pageSize: 10, currentPage: 0, totalCount: 0 },
//   error: null,
//   loading: false,
//   loaded: false,
// };

// @Injectable({ providedIn: 'root' })
// export class PackageService {
//   private readonly state = new BehaviorSubject<PackagesState>(initialState);
//   readonly state$ = this.state.asObservable().pipe(distinctUntilChanged());
//     api: any;

//   get currentState(): PackagesState {
//     return this.state.getValue();
//   }

//   constructor(private http: HttpClient) {}

//   getProducts(
//     pagination: Pagination
// //   ): Observable<any> {
//     const path = `${this.api}/Packages`;
//     // const params = createParamsFromObject(data)
//     //   .append('page', pagination.currentPage + '')
//     //   .append('pageSize', pagination.pageSize + '');

//     // return this.http.get<any>(path/);
// //   }

//   private setData(data: Package[], pagination: Pagination): void {
//     this.state.next({
//       ...this.currentState,
//       data,
//       pagination,
//       loading: false,
//       loaded: true,
//       error: null,
//     });
//   }

//   private setError(error: string): void {
//     this.state.next({
//       ...this.currentState,
//       error,
//       loading: false,
//       loaded: true,
//       data: [],
//     });
//   }

//   loadPackages(
//     pagination?: Partial<Pagination>
//   ): Observable<any> {
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
//     // const {pageSize, pageIndex} = this.currentState.pagination;

//     // return this.getPackages(
//     //   this.currentState.pagination
//     // ).pipe(
//     //   tap(res => {
//     //     const samplePagination: Pagination = {
//     //       pageSize: + res.per_page,
//     //       pageIndex: res.current_page, 
//     //       total: res.total,
//     //     };

//     //     return this.setData(res.data, samplePagination);
//     //   }),
//       catchError(error => {
//         this.setError('An error has occurred. Please try again later!');
//         return of(error);
//       })
//     // );
//   }
//     getPackages(pagination: Pagination) {
//         throw new Error('Method not implemented.');
//     }

//   getById(id: string): Observable<Package> {
//     return this.http.get<Package>(`${this.api}/Package/${id}`);
//   }



//   createProduct(payload: Package): Observable<Package> {
//     const path = `${this.api}/Package`;
//     return this.http.post<Package>(path, payload);
//   }

//   updateProduct(id: number, payload: Package): Observable<Package> {
//     const path = `${this.api}/Package/${id}`;
//     return this.http.patch<Package>(path, payload);
//   }
// }