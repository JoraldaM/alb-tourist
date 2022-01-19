import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pluck } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  name$ = this.auth.auth$.pipe(pluck('name'));

  constructor(public auth: AuthService) {}
}
