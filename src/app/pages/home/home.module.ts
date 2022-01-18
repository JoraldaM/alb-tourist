import { PackageSinglePageComponent } from './home/components/package-helpers/package-single-page/package-single-page/package-single-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PackageListComponent } from './home/containers/package-list/package-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from './home/components/swiper/swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package/:id', component: PackageSinglePageComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    PackageListComponent,
    PackageSinglePageComponent,
    SwiperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    NgxUsefulSwiperModule,
    // SwiperModule,
  ],
})
export class HomeModule {}
