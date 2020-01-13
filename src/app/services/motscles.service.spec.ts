import { TestBed } from '@angular/core/testing';

import { MotsclesService } from './motscles.service';

describe('MotsclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotsclesService = TestBed.get(MotsclesService);
    expect(service).toBeTruthy();
  });
});
