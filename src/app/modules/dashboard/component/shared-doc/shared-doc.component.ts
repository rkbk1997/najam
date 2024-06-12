import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { alias } from '../../../../constant/alias';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shared-doc',
  templateUrl: './shared-doc.component.html',
  styleUrl: './shared-doc.component.scss'
})
export class SharedDocComponent implements OnInit {
  appLang!: string;
  docList: any[] = [];
  /**
   * constructor
   * @param dashboardService 
   * @param LanguageService 
   */
  constructor(private dashboardService: DashboardService, private LanguageService: LangService, private router: Router) { }

  /**
   * ngOnInit Life cycle hook
   */
  ngOnInit(): void {
    this.LanguageService.languageSubject$.subscribe((res) => {
      this.appLang = res;
    });

    this.getAllDoc();
  }

  getAllDoc() {
    this.dashboardService.getRcoards(this.appLang, alias.DOCUMENT, 0, 10).subscribe((res: any) => {
      console.log(`🚀 ~ SharedDocComponent ~ this.dashboardService.getRcoards ~ res:`, res)
      this.docList = res.items;
    }, err => console.log(err));
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
