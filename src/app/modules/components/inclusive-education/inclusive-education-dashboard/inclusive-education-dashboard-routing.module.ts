import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InclusiveDashboardComponent } from './inclusive-dashboard/inclusive-dashboard.component';

const routes: Routes = [
  { path: '', component: InclusiveDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InclusiveEducationDashboardRoutingModule { }
