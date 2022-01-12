import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-single-page',
  templateUrl: './package-single-page.component.html',
  styleUrls: ['./package-single-page.component.scss'],
})
export class PackageSinglePageComponent {
  package$ = this.pack.getById(this.route.snapshot.params['id']);

  constructor(private pack: PackageService, private route: ActivatedRoute) {}
}
