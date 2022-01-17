import { PaginatedData } from './../../../../../core/models/PaginatedData.model';
import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Package } from 'src/app/core/models/packageRes.model';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  @Input() dataSource!: PaginatedData<Package>;
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
}
