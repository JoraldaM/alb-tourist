import { UsersService } from './../../../core/services/users.service';
import { Observable } from 'rxjs';
import { Package } from './../../../core/models/packageRes.model';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PackageService } from 'src/app/core/services/packages.service';
import { PaginatedData } from 'src/app/core/models/PaginatedData.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data$: Observable<PaginatedData<Package>> = this.packagesService.loadPackages(
    1,
    10,
    ''
  );
  nameFilter: string = '';
  constructor(private packagesService: PackageService) {}
  handlePagination({ pageSize, pageIndex }: PageEvent): void {
    this.data$ = this.packagesService.loadPackages(
      pageIndex + 1,
      pageSize,
      this.nameFilter
    );
  }
}
