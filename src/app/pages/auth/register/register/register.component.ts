import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
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
    text: ['', Validators.required],
    url: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private auth: AuthService) {}
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth.register(this.form.value).pipe(take(1)).subscribe();
  }
}
