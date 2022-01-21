// import { MatCardSharedModule } from 'src/app/shared/mat-card/mat-card/mat-card.component';
import { PackageListComponent } from './favorites/package-list/package-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [{ path: '', component: FavoritesComponent }];

@NgModule({
  declarations: [FavoritesComponent, PackageListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    // MatCardSharedModule,
  ],
})
export class FavoritesModule {}
