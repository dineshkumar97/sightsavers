import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EyeHealthInfrastructureComponent } from './eye-health-infrastructure/eye-health-infrastructure.component';

const routes: Routes = [
  {path: 'eye-health',component: EyeHealthInfrastructureComponent},
  { path: 'out-reach', loadChildren: () => import('./out-reach/out-reach.module').then(m => m.OutReachModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuralEyeHealthRoutingModule { }
