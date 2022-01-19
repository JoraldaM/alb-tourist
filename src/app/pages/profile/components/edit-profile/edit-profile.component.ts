import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() user?: User;
  @Input() readonly = false;

  profileData$ = this.auth.profile$;

  @Output() submitted = new EventEmitter<User>();

  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  constructor(
    private users: UsersService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) {}

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
  }
  handleEdit(data: User): void {
    this.users
      .updateProf(data)
      .pipe(take(1))
      .subscribe(value => {
        this.router.navigate(['profile']).then();
        this.snackBar.open('Profile edited successfully', 'close', {
          duration: 1000,
        });
      });
    this.submitted.emit(this.editForm.value);
  }
}
