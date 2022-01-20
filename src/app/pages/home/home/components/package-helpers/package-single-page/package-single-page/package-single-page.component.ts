import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-single-page',
  templateUrl: './package-single-page.component.html',
  styleUrls: ['./package-single-page.component.scss'],
})
export class PackageSinglePageComponent {
  packageId$: Observable<string> = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('packageId')!)
  );
  id$: Observable<string> = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id')!)
  );

  favCount$ = this.packageId$.pipe(
    switchMap(id => this.packagesService.getFavoriteCount(id))
  );

  package$ = this.id$.pipe(switchMap(id => this.packagesService.getById(id)));

  constructor(
    private packagesService: PackageService,
    private route: ActivatedRoute
  ) {}
}
