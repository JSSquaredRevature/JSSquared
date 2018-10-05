import { TestBed } from '@angular/core/testing';

import { SocialwService } from './socialw.service';

describe('SocialwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialwService = TestBed.get(SocialwService);
    expect(service).toBeTruthy();
  });
});
