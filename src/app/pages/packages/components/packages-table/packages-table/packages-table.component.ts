import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Package } from 'src/app/core/models/package.model';
import { Pagination } from 'src/app/core/models/pagination.model';

@Component({
  selector: 'app-packages-table',
  templateUrl: './packages-table.component.html',
  styleUrls: ['./packages-table.component.scss'],
})
export class PackagesTableComponent {
  @Input() dataSource: Package[] = [];

  // @Input() pagination: Pagination = {};

  @Output() paginated = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['id', 'name'];
}
