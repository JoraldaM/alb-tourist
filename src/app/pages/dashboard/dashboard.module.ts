import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { PackagesComponent } from '../packages/containers/all-packages/packages/packages.component';
import { UsersComponent } from '../users/containers/all-users/users/users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
// import { BarChartModule, PieChartModule } from '@swimlane/ngx-charts';

// const routes: Routes = [
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
//           import('./../packages/packages.module').then(m => m.PackagesModule),
//       },
//       {
//         path: 'users',
//         loadChildren: () =>
//           import('./../users/users.module').then(m => m.UsersModule),
//       },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: 'dashboard',
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    // BarChartModule,
    // MatProgressSpinnerModule,
    // PieChartModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DashboardModule {}
