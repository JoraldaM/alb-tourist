import { Package } from './../../../core/models/packageRes.model';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data$ = this.packagesService.loadPackages(1, 10, '');
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
