import { TestBed } from '@angular/core/testing';

import { SocialWorkerService } from './social-worker.service';

describe('SocialWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialWorkerService = TestBed.get(SocialWorkerService);
    expect(service).toBeTruthy();
  });
});
