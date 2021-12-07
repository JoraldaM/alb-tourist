import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { MainLayoutComponent } from './containers/main-layout/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './containers/empty-layout/empty-layout/empty-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EmptyLayoutComponent, MainLayoutComponent, NavbarComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
