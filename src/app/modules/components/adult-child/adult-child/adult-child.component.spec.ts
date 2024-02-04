import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultChildComponent } from './adult-child.component';

describe('AdultChildComponent', () => {
  let component: AdultChildComponent;
  let fixture: ComponentFixture<AdultChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultChildComponent]
    });
    fixture = TestBed.createComponent(AdultChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
