import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutReachListComponent } from './out-reach-list.component';

describe('OutReachListComponent', () => {
  let component: OutReachListComponent;
  let fixture: ComponentFixture<OutReachListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutReachListComponent]
    });
    fixture = TestBed.createComponent(OutReachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
