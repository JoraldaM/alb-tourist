import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EditUserComponent } from './containers/edit-user/edit-user/edit-user.component';
import { UserDetailsComponent } from './containers/user-details/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    // component: UserComponent,
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
  declarations: [],
  imports: [CommonModule],
})
export class UsersModule {}
