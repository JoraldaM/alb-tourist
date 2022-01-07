import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Package } from 'src/app/core/models/package.model';
import { PaginatedData } from 'src/app/core/models/PaginatedData.model';

@Component({
  selector: 'app-packages-table',
  templateUrl: './packages-table.component.html',
  styleUrls: ['./packages-table.component.scss'],
})
export class PackagesTableComponent {
  @Input() dataSource!: PaginatedData<Package>; 

  @Output() paginated = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['id', 'name'];
}
