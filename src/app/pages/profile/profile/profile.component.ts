import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  display = false;
  user$ = this.auth.profile$;
  id$: Observable<string> = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id')!)
  );
  userI$ = this.id$.pipe(switchMap(id => this.users.one(id)));

  @Input() user?: User;
  @Input() readonly = false;

  @Output() submitted = new EventEmitter<User>();

  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  constructor(
    private users: UsersService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder
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
}
