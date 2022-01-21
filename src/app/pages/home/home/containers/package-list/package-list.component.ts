import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Package } from 'src/app/core/models/packageRes.model';
import { PaginatedData } from 'src/app/core/models/PaginatedData.model';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent {
  @Input() dataSource!: PaginatedData<Package>;
  @Input() isFavorite: boolean = false;
  @Input() isSubmitting: boolean = false;
  @Output() paginated = new EventEmitter<PageEvent>();
  @Output() toggle = new EventEmitter<boolean>();

  constructor(
    private packageService: PackageService,
    private snackBar: MatSnackBar
  ) {}

  onFavorite(id: number, data: Package) {
    if (!this.isSubmitting) {
      this.packageService
        .addFavorites(id, data)
        .pipe(take(1))
        .subscribe(value => {
          this.isFavorite = true;
          this.isSubmitting = true;
          // this.isFavorite = !this.isFavorite;
          console.log(data);
          this.snackBar.open('Package added to favorites', 'close', {
            duration: 1000,
          });
        });
      this.isSubmitting = true;
    } else {
      this.packageService
        .removeFavorite(id)
        .pipe(take(1))
        .subscribe(value => {
          this.isSubmitting = false;
          this.isFavorite = false;
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
