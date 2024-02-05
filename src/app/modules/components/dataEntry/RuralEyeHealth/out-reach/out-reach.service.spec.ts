import { TestBed } from '@angular/core/testing';

import { OutReachService } from './out-reach.service';

describe('OutReachService', () => {
  let service: OutReachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutReachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
