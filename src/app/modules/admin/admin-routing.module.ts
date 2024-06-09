import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminServiceComponent } from './components/admin-service/admin-service.component';

const routes: Routes = [
  {path: 'services', component: AdminServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
