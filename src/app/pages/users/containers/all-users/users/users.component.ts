import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit{
  users$ = this.usersService.users$;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  filterUsers(name: string): void {
    this.users$ = this.usersService.users$.pipe(
      map(users =>
        users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))
      )
    );
  }

  delete(id: number): void {
    this.usersService.delete(id);
  }
}
