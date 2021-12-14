import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  // url: string | ArrayBuffer | null | undefined = '';

  editName = false;
  changePassword = false;

  hasPhotoUploaded = false;

  uploadForm: FormGroup = this.fb.group({
    profile: [''],
  });

  changePasswordForm = this.fb.group(
    {
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }
    // { validators: this.checkPasswords }
  );

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    @Inject(API_URL) private api: string
  ) {}

  // submitName(name: string): void {
  //   this.editName = false;

  //   this.auth
  //     .changeName(name)
  //     .pipe(take(1))
  //     .subscribe((user: any) => console.log(user));
  // }

  // submitChangePassword(): void {
  //   this.auth
  //     .changePassword(this.changePasswordForm.value)
  //     .pipe(take(1))
  //     .subscribe(
  //       user => {
  //         this.changePassword = false;
  //         console.log('Password was changed successfully!');
  //       },
  //       error => {
  //         this.changePassword = true;
  //         if (typeof error.error.message === 'string') {
  //           console.log(error.error.message);
  //         }
  //       }
  //     );
  // }

  // checkPasswords(group: FormGroup): null | { notSame: boolean } {
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   const password = group.get('newPassword')!.value;
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   const confirmPassword = group.get('confirmPassword')!.value;

  //   return password === confirmPassword ? null : { notSame: true };
  // }

  // onSelectFile(event: any): void {
  //   console.log(event);
  //   console.log(this.url);
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     this.uploadForm?.get('profile')?.setValue(event.target.files[0]);

  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = e => {
  //       // called once readAsDataURL is completed
  //       this.url = e?.target?.result;
  //       this.hasPhotoUploaded = true;
  //       console.log(this.url);
  //     };
  //   }
  // }
}
