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

  // config: SwiperOptions = {
  //   autoplay: {
  //     delay: 800,
  //     disableOnInteraction: false,
  //   },
  //   speed: 800,
  //   loop: true,
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   coverflowEffect: {
  //     slideShadows: true,
  //     rotate: 5,
  //     stretch: 15,
  //     depth: 5,
  //     modifier: 5,
  //   },
  // };
  config: SwiperOptions = {
    autoplay: {
      delay: 800,
      disableOnInteraction: true,
    },
    speed: 800,
    loop: true,
    effect: 'flip',
    grabCursor: true,
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  };
}
