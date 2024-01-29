import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
