import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './containers/edit-user/edit-user/edit-user.component';
import { UserDetailsComponent } from './containers/user-details/user-details/user-details.component';
import { UsersComponent } from './containers/users/users.component';
import { UsersTableComponent } from './components/users-table/users-table/users-table.component';
import { UserFormComponent } from './components/user-form/user-form/user-form.component';
import { AddUserComponent } from './containers/add-user/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
  },
];
@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserFormComponent,
    EditUserComponent,
    UserDetailsComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
  ],
})
export class UsersModule {}
