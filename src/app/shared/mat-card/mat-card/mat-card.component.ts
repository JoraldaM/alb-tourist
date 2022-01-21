// import { Favorites } from './../../../core/models/favorite.model';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { Component, Input, NgModule } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { take } from 'rxjs';
// import { Package } from 'src/app/core/models/packageRes.model';
// import { PaginatedData } from 'src/app/core/models/PaginatedData.model';
// import { PackageService } from 'src/app/core/services/packages.service';

// @Component({
//   selector: 'app-mat-card',
//   templateUrl: './mat-card.component.html',
//   styleUrls: ['./mat-card.component.scss'],
// })
// export class MatCardComponent {
//   @Input() dataSource!: PaginatedData<Package> | Favorites[];
//   @Input() isFavorite: boolean = false;
//   @Input() isSubmitting: boolean = false;
//   constructor(
//     private packageService: PackageService,
//     private snackBar: MatSnackBar
//   ) {}

//   onFavorite(id: number, data: Package) {
//     if (!this.isSubmitting) {
//       this.packageService
//         .addFavorites(id, data)
//         .pipe(take(1))
//         .subscribe(value => {
//           this.isFavorite = true;
//           this.isSubmitting = true;
//           // this.isFavorite = !this.isFavorite;
//           console.log(data);
//           this.snackBar.open('Package added to favorites', 'close', {
//             duration: 1000,
//           });
//         });
//       this.isSubmitting = true;
//     } else {
//       this.packageService
//         .removeFavorite(id)
//         .pipe(take(1))
//         .subscribe(value => {
//           this.isSubmitting = false;
//           this.isFavorite = false;
//           this.snackBar.open('Package removed from favorites', 'close', {
//             duration: 1000,
//           });
//         });
//     }
//   }
// }

// @NgModule({
//   declarations: [MatCardComponent],
//   imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
//   exports: [MatCardComponent],
// })
// export class MatCardSharedModule {}
