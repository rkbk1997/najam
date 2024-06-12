import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { alias } from '../../../../constant/alias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit {
  appLang!: string;
  newsList: any[] = [];
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

    this.getAllNews();
  }

  getAllNews() {
    this.dashboardService.getRcoards(this.appLang, alias.ARTICLE, 0, 10).subscribe((res: any) => {
      this.newsList = res.items;
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

  navigateToDetailsPage(item:any) {
    this.router.navigate(['/main/dashboard/news-details'], {queryParams: {id: item.id}});
  } 
}
