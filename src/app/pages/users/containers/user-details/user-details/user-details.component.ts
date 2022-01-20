import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  id$: Observable<string> = this.route.paramMap.pipe(
    map(paraMap => paraMap.get('id')!)
  );
  user$ = this.id$.pipe(switchMap(id => this.users.one(id)));

  constructor(private users: UsersService, private route: ActivatedRoute) {}
}
