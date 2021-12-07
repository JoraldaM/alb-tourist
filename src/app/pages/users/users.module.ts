import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EditUserComponent } from './containers/edit-user/edit-user/edit-user.component';
import { UserDetailsComponent } from './containers/user-details/user-details/user-details.component';
import { UsersComponent } from './containers/all-users/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
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
  declarations: [UsersComponent],
  imports: [CommonModule],
})
export class UsersModule {}
