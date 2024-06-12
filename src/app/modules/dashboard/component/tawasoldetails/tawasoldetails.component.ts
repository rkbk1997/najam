import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tawasoldetails',
  templateUrl: './tawasoldetails.component.html',
  styleUrl: './tawasoldetails.component.scss'
})
export class TawasoldetailsComponent {
  appLang!: string;
  tawasolDetails: any = {};

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
        this.gettawasolDetails(queryParams.id);
      }
    });
  }


  gettawasolDetails(id: any) {
    this.dashboardService.getRecoardById(id, this.appLang).subscribe((res:any) => {
      this.tawasolDetails = res;
      
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
