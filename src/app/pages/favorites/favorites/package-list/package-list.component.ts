import { Favorites } from './../../../../core/models/favorite.model';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent {
  isFavorite = true;

  @Input() dataSource!: Favorites[];

  constructor(
    private packageService: PackageService,
    private snackBar: MatSnackBar
  ) {}

  onFavorite(id: number) {
    if (this.isFavorite) {
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
