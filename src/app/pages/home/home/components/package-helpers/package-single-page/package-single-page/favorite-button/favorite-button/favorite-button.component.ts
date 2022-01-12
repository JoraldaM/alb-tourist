import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Package } from 'src/app/core/models/packageRes.model';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  constructor(
    private packageService: PackageService,
    private snackBar: MatSnackBar
  ) {}

  isFavorite = true;
  isSubmitting = false;

  onFavorite(id: number, data: Package) {
    if (this.isFavorite) {
      this.isFavorite = false;
    } else {
      this.isFavorite = true;
    }
    this.packageService
      .addFavorites(id, data)
      .pipe(take(1))
      .subscribe(value => {
        this.snackBar.open('Package edited successfully', 'close', {
          duration: 1000,
        });
      });
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
