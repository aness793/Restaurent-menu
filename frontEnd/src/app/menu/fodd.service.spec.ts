import { TestBed } from '@angular/core/testing';

import { FoddService } from './fodd.service';

describe('FoddService', () => {
  let service: FoddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
