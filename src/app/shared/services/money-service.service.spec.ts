import { TestBed } from '@angular/core/testing';

import { MoneyServiceService } from './money-service.service';

describe('MoneyServiceService', () => {
  let service: MoneyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
