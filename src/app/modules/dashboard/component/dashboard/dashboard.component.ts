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
        $('.event-carousel').owlCarousel({
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
        $('.main-carousel').owlCarousel({
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
        $('.box-carousel').owlCarousel({
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
      })
    })(jQuery);

  }

}
