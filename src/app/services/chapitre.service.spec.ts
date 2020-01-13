import { TestBed } from '@angular/core/testing';

import { ChapitreService } from './chapitre.service';

describe('ChapitreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChapitreService = TestBed.get(ChapitreService);
    expect(service).toBeTruthy();
  });
});
