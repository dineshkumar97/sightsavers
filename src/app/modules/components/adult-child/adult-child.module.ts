import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultChildRoutingModule } from './adult-child-routing.module';
import { AdultChildComponent } from './adult-child/adult-child.component';
import { CommonInputModule } from 'src/app/layout/commoninput.module';


@NgModule({
  declarations: [
    AdultChildComponent
  ],
  imports: [
    CommonModule,
    AdultChildRoutingModule,
    CommonInputModule,
  ],
  exports:[AdultChildComponent]
})
export class AdultChildModule { }
