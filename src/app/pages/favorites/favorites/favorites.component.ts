import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  constructor(private packagesService: PackageService) {}

  data$ = this.packagesService.getFavorite();
}
