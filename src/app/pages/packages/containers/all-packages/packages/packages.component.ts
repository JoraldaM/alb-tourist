import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  data$ = this.packagesService.loadPackages(1, 10, '');
  nameFilter: string = '';

  constructor(private packagesService: PackageService) {}
  clearFilters() {
    this.nameFilter = '';
    this.data$ = this.packagesService.loadPackages(1, 10, '');
  }

  handlePagination({ pageSize, pageIndex }: PageEvent): void {
    this.data$ = this.packagesService.loadPackages(
      pageIndex + 1,
      pageSize,
      this.nameFilter
    );
  }

  handleSearch(): void {
    this.data$ = this.packagesService.loadPackages(1, 10, this.nameFilter);
  }
}
