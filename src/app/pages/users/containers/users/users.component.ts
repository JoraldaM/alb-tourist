import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$ = this.usersService.users$;
  data$=this.usersService.loadUsers(1,10,'');
  nameFilter:string='';

  constructor(private usersService: UsersService) {}
  clearFilters(){
    this.nameFilter="";
    this.data$=this.usersService.loadUsers(1,10,'');
  }
 
  handlePagination({ pageSize, pageIndex }: PageEvent): void {
    if(pageIndex==0){
      // pageIndex++;
    }
    this.data$ = this.usersService.loadUsers(pageIndex + 1, pageSize, this.nameFilter);
  }

  handleSearch(): void {
    this.data$ = this.usersService.loadUsers(1, 10, this.nameFilter);
  }


  delete(id: number): void {
    this.usersService.delete(id);
  }
}
