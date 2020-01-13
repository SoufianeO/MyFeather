import { TestBed } from '@angular/core/testing';

import { CoverService } from './cover.service';

describe('CoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoverService = TestBed.get(CoverService);
    expect(service).toBeTruthy();
  });
});
