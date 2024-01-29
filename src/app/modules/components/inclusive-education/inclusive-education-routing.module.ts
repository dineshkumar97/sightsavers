import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', data: { breadcrumb: '' }, loadChildren:
      () => import('./inclusive-education-dashboard/inclusive-education-dashboard.module').
        then(m => m.InclusiveEducationDashboardModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InclusiveEducationRoutingModule { }
