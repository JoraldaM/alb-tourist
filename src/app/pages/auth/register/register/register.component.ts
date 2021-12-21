import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private auth: AuthService,  private router: Router,) {}
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // this.auth.register(this.form.value).subscribe();
    this.auth.register(this.form.value).pipe(take(1)).subscribe( {next: () => {
      this.router.navigate(['auth/login']);
  
    }
    


  })}
}
