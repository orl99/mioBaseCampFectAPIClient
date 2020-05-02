import { TestBed } from '@angular/core/testing';

import { BasecampOautFlowService } from './basecamp-oaut-flow.service';

describe('BasecampOautFlowService', () => {
  let service: BasecampOautFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasecampOautFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
