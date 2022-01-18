import { Favorites } from './../../../../core/models/favorite.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { PackageService } from 'src/app/core/services/packages.service';
import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent {
  // packageId = this.route.snapshot.params['packageId'];
  // favCount$ = this.packageService.getFavoriteCount(this.packageId);
  @Input() dataSource!: Favorites[];
  @Output() paginated = new EventEmitter<PageEvent>();
  constructor(
    private packageService: PackageService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}
  isFavorite = true;
  isSubmitting = false;

  // getFavoriteCount(id: number) {
  //   let favCount: number;
  //   this.packageService.getFavoriteCount(id).subscribe(count => {
  //     count.map(cnt => {
  //       favCount = cnt;
  //       console.log(favCount);
  //     });
  //   });
  // }

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
