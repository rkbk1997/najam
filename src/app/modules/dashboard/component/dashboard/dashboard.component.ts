import { AfterViewInit, Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {


  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          nav: true,
          navText: ["<i class='lni-chevron-left'></i>", "<i class='lni-chevron-right'></i>"],
          items: 3,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false
        });
      });
    })(jQuery);

  }

}
