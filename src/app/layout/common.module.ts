import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
    AccordionModule,
    PanelModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    PanelModule,
    FormsModule,
    AccordionModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,]

})
export class CommonInputModule { }
