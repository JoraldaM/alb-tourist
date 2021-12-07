import { RegisterComponent } from './register/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        // canActivate: [AdminExistsGuard],
        component: LoginComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AuthModule {}
