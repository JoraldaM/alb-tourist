
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PackageDetailsComponent } from './containers/package-details/package-details/package-details.component';
import { PackagesComponent } from './containers/all-packages/packages/packages.component';
import { CreatePackageComponent } from './containers/create-package/create-package/create-package.component';
import { EditPackageComponent } from './containers/edit-package/edit-package/edit-package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button/favorite-button.component';

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
    FavoriteButtonComponent,
  ],
  imports: [CommonModule, 
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,],
})
export class PackagesModule {}
