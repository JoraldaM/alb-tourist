import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pluck } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navItems = this.layoutService.navItems;

  name$ = this.auth.auth$.pipe(pluck('name'));

  constructor(private layoutService: LayoutService, public auth: AuthService) {}
}
