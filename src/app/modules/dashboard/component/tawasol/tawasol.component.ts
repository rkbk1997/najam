import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { alias } from '../../../../constant/alias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tawasol',
  templateUrl: './tawasol.component.html',
  styleUrl: './tawasol.component.scss'
})
export class TawasolComponent {
  appLang!: string;
  tawasols: any[] = [];
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

    this.getAllTawasols();
  }

  getAllTawasols() {
    this.dashboardService.getRcoards(this.appLang, alias.TAWASOL, 0, 10).subscribe((res: any) => {
      this.tawasols = res.items;
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
    this.router.navigate(['/main/dashboard/tawasoldetails'], {queryParams: {id: item.id}});
  } 
}
