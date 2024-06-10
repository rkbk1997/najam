import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TawasolComponent } from './component/tawasol/tawasol.component';
import { TawasoldetailsComponent } from './component/tawasoldetails/tawasoldetails.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path:'tawasol', component: TawasolComponent },
  { path: 'tawasoldetails', component: TawasoldetailsComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
