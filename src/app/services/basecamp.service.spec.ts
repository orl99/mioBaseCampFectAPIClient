import { TestBed } from '@angular/core/testing';

import { BasecampService } from './basecamp.service';

describe('BasecampService', () => {
  let service: BasecampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasecampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
