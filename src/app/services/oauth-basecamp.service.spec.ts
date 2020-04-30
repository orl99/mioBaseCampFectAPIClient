import { TestBed } from '@angular/core/testing';

import { OauthBasecampService } from './oauth-basecamp.service';

describe('OauthBasecampService', () => {
  let service: OauthBasecampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthBasecampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
