import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from '../../../../services/lang/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { alias } from '../../../../constant/alias';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  userLanguage!: string;
  isShowMenu = false;  
  systemLinks: any = [];
  dupSystemLink: any = [];
  searchSubject = new Subject();

  constructor(private dashboard: DashboardService ,private router: Router, private languageSevice: LangService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.languageSevice.languageSubject$.subscribe((res) => {
      this.userLanguage = res;
      this.setUIDirection();
    });
    this.getSystemExternalLinks();

    this.searchSubject.subscribe((txt) => {

    });
  };


  searchLink() {
  }

  setUIDirection() {
    const element = document.getElementsByTagName('html')[0];
    element.setAttribute('dir', this.userLanguage === 'ar' ? 'rtl' : 'ltr');
  }

  openServicePage() {
    const ele = document.createElement('a');
    ele.href = 'https://najm.kyal.in/umbraco/login';
    ele.target = '_blank'
    ele.click();
    // this.router.navigate(['/main/admin/services']);
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
    this.dashboard.getSystemLink(this.userLanguage, alias.FRONTPAGE).subscribe((res: any)=> {
      if(res.items && res.items.length) {
        this.systemLinks = res.items[0].properties.systemLinks;
        this.dupSystemLink = res.items[0].properties.systemLinks;
      } else {
        this.systemLinks = [];
      }
    });
  }
}
