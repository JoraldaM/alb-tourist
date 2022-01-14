import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { handleServerSideValidation } from 'src/app/core/utils/server-side-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  hide = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth
      .login(this.form.value)
      .pipe(take(1))
      .subscribe(
        value => {},

        error => {
          this.openSnackBar(error.message, 'danger-alert');
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
