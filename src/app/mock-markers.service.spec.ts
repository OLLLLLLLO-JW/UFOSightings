import { TestBed } from '@angular/core/testing';

import { MockMarkersService } from './mock-markers.service';

describe('MockMarkersService', () => {
  let service: MockMarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
