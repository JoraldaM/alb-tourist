import { Package } from './../../../../core/models/packageRes.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent {
  @Input() dataSource!: Package[];
  @Output() paginated = new EventEmitter<PageEvent>();
  constructor(
    private packageService: PackageService,
    private snackBar: MatSnackBar
  ) {}
  isFavorite = true;
  isSubmitting = false;

  onFavorite(id: number, data: Package) {
    if (this.isFavorite) {
      this.packageService
        .addFavorites(id, data)
        .pipe(take(1))
        .subscribe(value => {
          console.log(data);
          this.snackBar.open('Package added to favorites', 'close', {
            duration: 1000,
          });
        });
      this.isFavorite = false;
    } else {
      this.isFavorite = true;

      this.packageService
        .removeFavorite(id)
        .pipe(take(1))
        .subscribe(value => {
          this.snackBar.open('Package removed from favorites', 'close', {
            duration: 1000,
          });
        });
    }
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
