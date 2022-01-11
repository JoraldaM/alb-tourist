import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Package } from 'src/app/core/models/packageRes.model';

@Component({
  selector: 'app-packages-edit-form',
  templateUrl: './packages-edit-form.component.html',
  styleUrls: ['./packages-edit-form.component.scss'],
})
export class PackagesEditFormComponent implements OnInit {
  @Input() package?: Package;

  @Input() readonly = false;

  @Output() submitted = new EventEmitter<Package>();

  form = this.fb.group({
    name: [null, Validators.required],
    id: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.package) {
      this.form.patchValue(this.package);
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
