import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
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
@NgModule({
  declarations: [FormEditComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
  ],
  exports: [FormEditComponent],
})
export class EditFormModule {}
