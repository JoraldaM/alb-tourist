import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout/auth-layout.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ],
  providers: [AuthInterceptorProvider, MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
