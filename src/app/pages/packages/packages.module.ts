
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PackageDetailsComponent } from './containers/package-details/package-details/package-details.component';
import { PackagesComponent } from './containers/all-packages/packages/packages.component';
import { CreatePackageComponent } from './containers/create-package/create-package/create-package.component';
import { EditPackageComponent } from './containers/edit-package/edit-package/edit-package.component';

const routes: Routes = [
  {
    path: '',
    component: PackagesComponent,
  },
  {
    path: 'details/:id',
    component: PackageDetailsComponent,
  },
  {
    path: 'add',
    component: CreatePackageComponent,
  },
  {
    path: 'edit/:id',
    component: EditPackageComponent,
  },
];
@NgModule({
  declarations: [
    PackagesComponent,
    PackageDetailsComponent,
    CreatePackageComponent,
    EditPackageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PackagesModule {}
