import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NonAuthGuard } from './core/guards/non-auth.guard';
import { Role } from './core/models/role';
import { EmptyLayoutComponent } from './layout/containers/empty-layout/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layout/containers/main-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    canActivate: [NonAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
          data: { roles: [Role.Admin] }
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile/profile.module').then(
            m => m.ProfileModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home/home.module').then(m => m.HomeModule),
          data: { roles: [Role.User] }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
