import { TestBed } from '@angular/core/testing';

import { LoacalService } from './loacal.service';

describe('LoacalService', () => {
  let service: LoacalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoacalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
