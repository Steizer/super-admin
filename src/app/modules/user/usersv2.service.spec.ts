import { TestBed } from '@angular/core/testing';

import { Usersv2Service } from './usersv2.service';

describe('Usersv2Service', () => {
  let service: Usersv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usersv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
