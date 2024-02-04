import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeHealthInfrastructureComponent } from './eye-health-infrastructure.component';

describe('EyeHealthInfrastructureComponent', () => {
  let component: EyeHealthInfrastructureComponent;
  let fixture: ComponentFixture<EyeHealthInfrastructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeHealthInfrastructureComponent]
    });
    fixture = TestBed.createComponent(EyeHealthInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
