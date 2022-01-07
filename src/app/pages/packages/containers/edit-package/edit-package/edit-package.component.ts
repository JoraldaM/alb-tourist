import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Package } from 'src/app/core/models/packageRes.model';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.scss'],
})
export class EditPackageComponent {

  packageId = this.route.snapshot.params['id'];
  package$ = this.pack.getById(this.packageId);

  constructor(
    private pack: PackageService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  handleEdit(data: Package): void {
    this.pack
      .updatePackage(this.packageId, data)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/packages']).then();
          this.snackBar.open('Package edited successfully', 'close', {
            duration: 1000,
          });
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
            if (typeof error.error.message === 'string') {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
          }
        }
      );
  }
  delete(id: number): void {
    this.pack
      .delete(this.packageId)
      .pipe(take(1))
      .subscribe(
        value => {
          this.router.navigate(['dashboard/packages']).then();
          this.openSnackBar('Package deleted successfully', 'success-snackbar');
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
            if (typeof error.error.message === 'string') {
              this.openSnackBar(error.error.message, 'alert-snackbar');
            }
          }
        }
      );
  }


  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass,
    });
  }
}


