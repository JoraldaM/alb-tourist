import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { PackagesComponent } from '../packages/containers/all-packages/packages/packages.component';
import { UsersComponent } from '../users/containers/all-users/users/users.component';

// const routes: Routes = [
// { path: '', component: DashboardComponent }
//   {
//     path: '',
//     component: DashboardComponent,

//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full',
//       },
//       {
//         path: 'packages',
//         loadChildren: () =>
//           import('./pages/packages/packages.module').then(
//             m => m.PackagesModule
//           ),
//       },
//       {
//         path: 'users',
//         loadChildren: () =>
//           import('./pages/users/users.module').then(m => m.UsersModule),
//       },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'packages',
    component: PackagesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
