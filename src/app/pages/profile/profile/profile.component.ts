import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
// import { take } from 'rxjs';
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
  
  );
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar, 
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
  // save(): void {
  //   console.log(this.url);
  //   const formData = new FormData();
  //   formData.append('photo', this.uploadForm?.get('profile')?.value);
  //   this.auth.changeProfilePhoto(formData).subscribe(
  //     res => {
  //       if (res) {
  //         this.openSnackBar('Photo Changed Successfully', 'success-snackbar');
  //         this.hasPhotoUploaded = false;
  //       }
  //     },
  //     error => {
  //       this.openSnackBar(error.message, 'alert-snackbar');
  //     }
  //   );
  // }
  // openSnackBar(message: string, panelClass: string): void {
  //   this.snackBar.open(message, '', {
  //     duration: 3000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     panelClass,
  //   });
  // }
}
