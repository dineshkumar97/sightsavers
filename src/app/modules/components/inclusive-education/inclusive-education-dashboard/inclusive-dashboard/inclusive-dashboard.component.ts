import { Component } from '@angular/core';

@Component({
  selector: 'app-inclusive-dashboard',
  templateUrl: './inclusive-dashboard.component.html',
  styleUrls: ['./inclusive-dashboard.component.scss']
})
export class InclusiveDashboardComponent {
  selectedCountryAdvanced: any[] = [];
  filteredCountries: any[] = [];
}
