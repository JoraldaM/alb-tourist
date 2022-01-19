import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Input() user?: User;
  @Input() readonly = false;

  @Output() submitted = new EventEmitter<User>();

  form = this.fb.group({
    name: [null, Validators.required],
    id: [null, Validators.required],
    email: [null, Validators.required],
    imageUrl: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    if (this.user) {
      this.form.patchValue(this.user);
    }
    if (this.readonly) {
      this.form.disable();
    }
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.form.value);
  }
}
