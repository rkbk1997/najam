import { Component } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { LangService } from '../../../../services/lang/lang.service';
import { alias } from '../../../../constant/alias';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  appLang!: string;
  employeeList: any[] = [];
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
    });

    this.getEmployees();
  }



  getEmployees() {
    this.dashboardService.getRcoards(this.appLang, alias.STARS, 0, 10).subscribe((res: any) => {
      this.employeeList = res.items;
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
