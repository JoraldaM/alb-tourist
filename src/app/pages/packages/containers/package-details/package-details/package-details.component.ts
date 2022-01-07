import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent {
  package$ = this.pack.getById(this.route.snapshot.params['id']);

  constructor(private pack: PackageService, private route: ActivatedRoute) {}
}
