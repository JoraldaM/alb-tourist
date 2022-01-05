import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { MainLayoutComponent } from './containers/main-layout/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './containers/empty-layout/empty-layout/empty-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    EmptyLayoutComponent,
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    // SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
})
export class LayoutModule {}
