import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutReachRoutingModule } from './out-reach-routing.module';
import { OutReachCreateComponent } from './out-reach-create/out-reach-create.component';
import { OutReachListComponent } from './out-reach-list/out-reach-list.component';
import { CommonInputModule } from 'src/app/layout/common.module';


@NgModule({
  declarations: [
    OutReachCreateComponent,
    OutReachListComponent
  ],
  imports: [
    CommonModule,
    OutReachRoutingModule,
    CommonInputModule,

  ]
})
export class OutReachModule { }
