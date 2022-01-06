import { Component } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-root',
  template: '<router-outlet> </router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alb-tourist';
}
