import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';
// import { BehaviorSubject, switchMap } from 'rxjs';
// import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  vm$ = this.packagesService.state$;

  dataSource: any;
  pagination: any;

  load = new BehaviorSubject<any>(undefined);

  racing$ = this.load.asObservable().pipe(
    switchMap((value: any) => {
      // debugger;

      // if (value?.pageSize) {
      // pagination
      // return this.productsService.loadPackages(value);
      // } else {
      // initial load
      return this.packagesService.loadPackages();
      // }
    })
  );

  constructor(private packagesService: PackageService) {}

  ngOnInit(): void {
    this.vm$.subscribe(console.log);
  }

  onClickedRow(row: any): void {
    console.log(row);
  }
}
