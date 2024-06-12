import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from '../../../../services/lang/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { alias } from '../../../../constant/alias';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  userLanguage!: string;
  isShowMenu = false;  
  systemLinks: any = [];

  constructor(private dashboard: DashboardService ,private router: Router, private languageSevice: LangService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.languageSevice.languageSubject$.subscribe((res) => {
      this.userLanguage = res;
      this.setUIDirection();
    });
    this.getSystemExternalLinks();
  };

  setUIDirection() {
    const element = document.getElementsByTagName('html')[0];
    element.setAttribute('dir', this.userLanguage === 'ar' ? 'rtl' : 'ltr');
  }

  openServicePage() {
    this.router.navigate(['/main/admin/services']);
  }

  changeLanguage() {
    const changedLanguage = this.userLanguage === 'ar' ? 'en' : 'ar';
    this.languageSevice.languageSubject$.next(changedLanguage);
    localStorage.setItem('lang', changedLanguage);
    window.location.reload();
    this.switchLanguage();
  }

  switchLanguage() {
    this.translateService.use(this.userLanguage);
  }

  toggleMenu() {
    return this.isShowMenu = !this.isShowMenu;
  }

  getSystemExternalLinks() {
    this.dashboard.getRcoards(this.userLanguage, alias.FRONTPAGE, 0, 10).subscribe((res: any)=> {
      console.log(`🚀 ~ HeaderComponent ~ this.dashboard.getRcoards ~ res:`, res)
      
    });
  }
}
