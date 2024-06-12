import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit {
  appLang!: string;
  newsDetails: any = {};

  /**
   * constructor
   * @param dashboardService 
   * @param LanguageService 
   */
  constructor(private dashboardService: DashboardService, private LanguageService: LangService, private activateRoute: ActivatedRoute) { }

  /**
   * ngOnInit Life cycle hook
   */
  ngOnInit(): void {
    this.LanguageService.languageSubject$.subscribe((res) => {
      this.appLang = res;
    });

    this.activateRoute.queryParams.subscribe((queryParams:any) => {
      if(queryParams.id) {
        this.getNewsDetails(queryParams.id);
      }
    });
  }


  getNewsDetails(id: any) {
    this.dashboardService.getRecoardById(id, this.appLang).subscribe((res:any) => {
      this.newsDetails = res;
      
    })
  }


    /**
   * get image url 
   * @param url 
   * @returns 
   */
    getImageUrl(url: string) {
      return this.dashboardService.getImageUrl(url);
    }
  
}
