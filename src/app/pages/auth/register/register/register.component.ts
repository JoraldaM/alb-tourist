import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private auth: AuthService,  private router: Router, private snackBar: MatSnackBar) {}
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // this.auth.register(this.form.value).subscribe();
    this.auth.register(this.form.value).pipe(take(1)).subscribe( 
     () => {
      this.router.navigate(['auth/login']);
  
    },
    error => {
      this.openSnackBar(error.message, 'danger-alert');
    }

  )}
  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}

