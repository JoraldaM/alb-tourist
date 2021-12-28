// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Package } from 'src/app/core/models/package.model';

// @Component({
//   selector: 'app-favorite-button',
//   templateUrl: './favorite-button.component.html',
//   styleUrls: ['./favorite-button.component.scss']
// })
// export class FavoriteButtonComponent {
 
//   constructor() { private packagesService: PackagesService}
//   @Input() package: Package;
//   @Output() toggle = new EventEmitter<boolean>();
//   isSubmitting = false;

//   toggleFavorite() {
//     this.isSubmitting = true;

  

//         // Favorite the package if it isn't favorited yet
//         if (!this.package.favorited) {
//           return this.packagesService.favorite(this.package.slug)
//           .pipe(tap(
//             data => {
//               this.isSubmitting = false;
//               this.toggle.emit(true);
//             },
//             err => this.isSubmitting = false
//           ));

//         // Otherwise, unfavorite the package
//         } else {
//           return this.packagesService.unfavorite(this.package.slug)
//           .pipe(tap(
//             data => {
//               this.isSubmitting = false;
//               this.toggle.emit(false);
//             },
//             err => this.isSubmitting = false
//           ));
//         }

//       }
//     )).subscribe();
//   }



// }
