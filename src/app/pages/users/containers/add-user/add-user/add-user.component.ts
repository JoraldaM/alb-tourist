import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(
    private users: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  handleAdd(data: User): void {
    this.users
      .create(data)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/users']).then();
          this.snackBar.open('User created successfully', 'close', {
            duration: 2000,
          });
        }
        // error => {
        // if (error instanceof HttpErrorResponse) {
        // if (error.status === 401) {
        // this.openSnackBar(error.error.message, 'alert-snackbar');
        // }
        // if (typeof error.error.message === 'string') {
        // this.openSnackBar(error.error.message, 'alert-snackbar');
        // }

        // }
        // }
      );
  }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}
