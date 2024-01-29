import { Component } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-inclusive-dashboard',
  templateUrl: './inclusive-dashboard.component.html',
  styleUrls: ['./inclusive-dashboard.component.scss']
})
export class InclusiveDashboardComponent {
  selectedCountryAdvanced: any[] = [];
  filteredCountries: any[] = [];
  cities: City[];

  selectedCity: City;
  constructor() {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
}
}
