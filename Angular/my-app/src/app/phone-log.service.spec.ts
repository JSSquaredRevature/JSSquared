import { TestBed } from '@angular/core/testing';

import { PhoneLogService } from './phone-log.service';

describe('PhoneLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneLogService = TestBed.get(PhoneLogService);
    expect(service).toBeTruthy();
  });
});
