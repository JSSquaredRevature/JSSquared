import { TestBed } from '@angular/core/testing';

import { CourtDateService } from './court-date.service';

describe('CourtDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourtDateService = TestBed.get(CourtDateService);
    expect(service).toBeTruthy();
  });
});
