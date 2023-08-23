import { TestBed } from '@angular/core/testing';

import { LoginMenuService } from './login-menu.service';

describe('LoginMenuService', () => {
  let service: LoginMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
