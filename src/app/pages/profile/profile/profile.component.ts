import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
// import { take } from 'rxjs';
import { API_URL } from 'src/app/core/api.token';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user$ = this.auth.profile$;

  editName = false;
  // changePassword = false;
  
  uploadForm: FormGroup = this.fb.group({
    profile: [''],
  });
  display = false;
  editForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
    }
    // { validators: this.checkPasswords }
  );
  constructor(
    private auth: AuthService,
    private fb: FormBuilder 
  ) {}

  displayForm() {
    this.display = !this.display;
  }
  submitName(name: string): void {
    this.editName = false;
    this.auth
      .changeName(name)
      .pipe(take(1))
      .subscribe((user: any) => console.log(user));
  }
}
