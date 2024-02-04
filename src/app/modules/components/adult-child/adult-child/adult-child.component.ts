import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adult-child',
  templateUrl: './adult-child.component.html',
  styleUrls: ['./adult-child.component.scss']
})
export class AdultChildComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private parentContainer: ControlContainer) {

  }
  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadFormGroup();
  }
  public loadFormGroup(): void {
    this.formGroup = this.parentContainer.control as FormGroup;
  }


}
