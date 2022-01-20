import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent {
  id$: Observable<string> = this.route.paramMap.pipe(
    map(paraMap => paraMap.get('id')!)
  );
  package$ = this.id$.pipe(switchMap(id => this.pack.getById(id)));
  constructor(private pack: PackageService, private route: ActivatedRoute) {}
}
