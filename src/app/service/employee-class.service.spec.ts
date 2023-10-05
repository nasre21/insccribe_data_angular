import { TestBed } from '@angular/core/testing';

import { EmployeeClassService } from './employee-class.service';

describe('EmployeeClassService', () => {
  let service: EmployeeClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
