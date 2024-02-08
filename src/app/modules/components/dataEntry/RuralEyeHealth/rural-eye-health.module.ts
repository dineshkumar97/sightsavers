import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuralEyeHealthRoutingModule } from './rural-eye-health-routing.module';
import { EyeHealthInfrastructureComponent } from './eye-health-infrastructure/eye-health-infrastructure.component';
import { CommonInputModule } from 'src/app/layout/commoninput.module';


@NgModule({
  declarations: [
    EyeHealthInfrastructureComponent,
  ],
  imports: [
    CommonModule,
    RuralEyeHealthRoutingModule,
  ]
})
export class RuralEyeHealthModule { }
