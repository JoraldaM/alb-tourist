import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}
  //   @Input() package: Package;
  //   @Output() toggle = new EventEmitter<boolean>();
  isFavorite = true;
  isSubmitting = false;

  onFavorite() {
    if (this.isFavorite) {
      this.isFavorite = false;
    } else {
      this.isFavorite = true;
    }
  }
}
