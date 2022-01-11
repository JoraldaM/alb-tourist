import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.auth.profile$;
  userId = this.route.snapshot.params['id'];
  userI$ = this.users.one(this.userId);
  @Input() user?: User;
  @Input() readonly = false;

  @Output() submitted = new EventEmitter<User>();
  display = false;
  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  constructor(
    private users: UsersService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  displayForm() {
    this.display = !this.display;
  }
  ngOnInit(): void {
    if (this.user) {
      this.editForm.patchValue(this.user);
    }
    if (this.readonly) {
      this.editForm.disable();
    }
  }

  handleSubmit(): void {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.editForm.value);
    this.display = true;
  }

  //  onSubmit() {

  //   this.auth.updateProfile(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['profile']);
  //       },
  //       error => {
  //         alert(error);
  //       });
  //  }
  handleEdit(data: User): void {
    this.users
      .updateProf(this.userId, data)
      .pipe(take(1))
      .subscribe(
        value => {
          // this.router.navigate(['/profile']).then();
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

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}
