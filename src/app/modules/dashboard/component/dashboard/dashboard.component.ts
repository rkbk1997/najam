import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { alias } from '../../../../constant/alias';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  appLang!: string;
  announcements: any[] = [];
  najamNews: any[] = []
  stars: any[] = []
  mediaReport: any[] = [];
  tawasols: any[] = [];
  systemLinks: any;
  documents: any = [];

  /**
   * constructor
   * @param dashboardService 
   * @param LanguageService 
   */
  constructor(private dashboardService: DashboardService, private LanguageService: LangService) { }

  /**
   * ngOnInit Life cycle hook
   */
  ngOnInit(): void {
    this.LanguageService.languageSubject$.subscribe((res) => {
      this.appLang = res;
      this.initializeDashboard();
    });
  }

  /**
   * use for initializeDashboard
   */
  initializeDashboard() {
    this.getAnnouncements();
    this.getNajmNews();
    this.getStars();
    this.getMediaReport();
    this.getTawasols();
    this.getSystemExternalLinks();
    this.getDocuments();
  }

  /**
   * get announcements recoards
   */
  getAnnouncements() {
    this.dashboardService.getRcoards(this.appLang, alias.ANNOUNCEMENT, 0, 10).subscribe((res: any) => {
      this.announcements = [...res.items];
      this.setCarouselAction();
    }, err => {
      console.log(err);
    });
  }

  /**
   * get najam news recoards
   */
  getNajmNews() {
    this.dashboardService.getRcoards(this.appLang, alias.ARTICLE, 0, 10).subscribe((res: any) => {
      this.najamNews = res.items;
    }, err => {
      console.log(err);
    });
  }
  /**
   * get stars recoards
   */
  getStars() {
    this.dashboardService.getRcoards(this.appLang, alias.STARS, 0, 10).subscribe((res: any) => {
      this.stars = res.items;
    }, err => {
      console.log(err);
    });
  }

  /**
   * get media report recoards
   */
  getMediaReport() {
    this.dashboardService.getRcoards(this.appLang, alias.REPORT, 0, 10).subscribe((res: any) => {
      this.mediaReport = res.items;
    }, err => {
      console.log(err);
    });
  }

  /**
   * get tawasols recoards  
   */
  getTawasols() {
    this.dashboardService.getRcoards(this.appLang, alias.TAWASOL, 0, 10).subscribe((res: any) => {
      this.tawasols = res.items;
    }, err => {
      console.log(err);
    });
  }

  /**
   * get image url 
   * @param url 
   * @returns 
   */
  getImageUrl(url: string) {
    return this.dashboardService.getImageUrl(url);
  }

  getSystemExternalLinks() {
    this.dashboardService.getSystemLink(this.appLang, alias.FRONTPAGE).subscribe((res: any)=> {
      if(res.items && res.items.length) {
        this.systemLinks = res.items[0].properties;
        console.log(`🚀 ~ DashboardComponent ~ this.dashboardService.getSystemLink ~ systemLinks:`, this.systemLinks)
      } else {
        this.systemLinks = [];
      }
    });
  }

  getDocuments() {
    this.dashboardService.getRcoards(this.appLang, alias.DOCUMENT, 0, 10).subscribe((res: any) => {
      console.log(`🚀 ~ DashboardComponent ~ this.dashboardService.getRcoards ~ res:`, res)
      this.documents = res.items;
      
    })
  }

  /**
   * set dynamic properties for owl carousel
   */
  setCarouselAction() {
    const pos =   this.appLang === 'ar';
    (function ($) {
      $(document).ready(function () {
        $('.event-carousel').owlCarousel({
          rtl: pos,
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
