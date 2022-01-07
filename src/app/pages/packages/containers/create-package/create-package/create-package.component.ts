import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Package } from 'src/app/core/models/package.model';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss'],
})
export class CreatePackageComponent {
  constructor(
    private packages: PackageService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  handleAdd(data: Package): void {
    this.packages
      .createPackage(data)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/packages']).then();
          this.snackBar.open('Package created successfully', 'close', {
            duration: 2000,
          });
        }
      );
  }
}
