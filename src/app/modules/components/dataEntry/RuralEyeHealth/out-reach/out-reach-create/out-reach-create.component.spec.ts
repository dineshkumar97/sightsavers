import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutReachCreateComponent } from './out-reach-create.component';

describe('OutReachCreateComponent', () => {
  let component: OutReachCreateComponent;
  let fixture: ComponentFixture<OutReachCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutReachCreateComponent]
    });
    fixture = TestBed.createComponent(OutReachCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
