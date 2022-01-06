import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  userId = this.route.snapshot.params['id'];
  user$ = this.users.one(this.userId);

  constructor(
    private users: UsersService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private usersService: UsersService
  ) {}

  handleEdit(data: User): void {
    this.users
      .update(this.userId, data)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/users']).then();
          this.snackBar.open('User edited successfully', 'close', {
            duration: 1000,
          });
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
            if (typeof error.error.message === 'string') {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
          }
        }
      );
  }
  delete(id: number): void {
    this.users
      .delete(this.userId)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/users']).then();
          this.openSnackBar('User deleted successfully', 'success-snackbar');
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
            if (typeof error.error.message === 'string') {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
          }
        }
      );
  }

  // delete(id: number): void {
  // this.usersService.delete(id);
  // }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}
