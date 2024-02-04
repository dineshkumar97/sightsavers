import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutReachCreateComponent } from './out-reach-create/out-reach-create.component';
import { OutReachListComponent } from './out-reach-list/out-reach-list.component';

const routes: Routes = [
  {path: 'out-reach-create',component: OutReachCreateComponent},
  {path: 'out-reach-list',component: OutReachListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutReachRoutingModule { }
