import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InclusiveEducationDashboardRoutingModule } from './inclusive-education-dashboard-routing.module';
import { InclusiveDashboardComponent } from './inclusive-dashboard/inclusive-dashboard.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InclusiveDashboardComponent
  ],
  imports: [
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
    InclusiveEducationDashboardRoutingModule
  ]
})
export class InclusiveEducationDashboardModule { }
