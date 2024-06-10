import { AfterViewInit, Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {


  ngAfterViewInit() {
    (function (jQuery) {
      jQuery(document).ready(function () {
        jQuery('.main-carousel').owlCarousel({
          rtl: true,
          nav: true,
          //navText: ["<i class='lni-chevron-left'></i>", "<i class='lni-chevron-right'></i>"],
          items: 1,
          loop: false,
          margin: 10,
          lazyLoad: true,
          dots: true
        })
        jQuery('.event-carousel').owlCarousel({
          rtl: true,
          loop: false,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 2,
              nav: false
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              dots: false,
              margin: 20
            }
          }
        })
        jQuery('.box-carousel').owlCarousel({
          rtl: true,
          loop: false,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
          }
        })
      });
    })(jQuery);
  }
}
