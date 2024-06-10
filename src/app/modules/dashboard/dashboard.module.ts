import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { TawasolComponent } from './component/tawasol/tawasol.component';
import { TawasoldetailsComponent } from './component/tawasoldetails/tawasoldetails.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TawasolComponent,
    TawasoldetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule
  ]
})
export class DashboardModule { }
