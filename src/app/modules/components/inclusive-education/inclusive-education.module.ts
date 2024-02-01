import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule } from '@angular/forms';
import { InclusiveEducationRoutingModule } from './inclusive-education-routing.module';
import { InclusiveDashboardComponent } from './inclusive-dashboard/inclusive-dashboard.component';

@NgModule({
  declarations: [InclusiveDashboardComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
    InclusiveEducationRoutingModule
  ]
})
export class InclusiveEducationModule { }
