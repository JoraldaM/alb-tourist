import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatedData } from 'src/app/core/models/PaginatedData.model';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent {
  @Input() dataSource!: PaginatedData<User>; 
  @Output() paginated = new EventEmitter<PageEvent>();
  
  displayedColumns: string[] = ['id', 'name', 'email',  'role', 'imageUrl'];

}
