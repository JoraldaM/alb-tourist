import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout/auth-layout.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
// import { SwiperModule } from 'swiper/angular';
// import { CanViewDirective } from './core/directives/can-view.directive';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // SwiperModule,
    // NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
