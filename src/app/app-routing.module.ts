import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyLayoutComponent } from './layout/containers/empty-layout/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layout/containers/main-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    // canActivate: [NonAuthGuard],
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
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'packages',
        // canActivate: [RoleGuard],
        data: {},
        loadChildren: () =>
          import('./pages/packages/packages.module').then(
            m => m.PackagesModule
          ),
      },
      // {
      //   path: 'manage-users',
      //   canActivate: [RoleGuard],
      //   loadChildren: () =>
      //     import('./pages/manage-users/manage-users.module').then(
      //       m => m.ManageUsersModule
      //     ),
      // },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile/profile.module').then(
            m => m.ProfileModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
