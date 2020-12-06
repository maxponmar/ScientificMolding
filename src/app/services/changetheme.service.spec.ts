import { TestBed } from '@angular/core/testing';

import { ChangethemeService } from './changetheme.service';

describe('ChangethemeService', () => {
  let service: ChangethemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangethemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
