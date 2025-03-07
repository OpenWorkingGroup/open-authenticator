import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './error.service';

describe('ErrorService', () => {
  let service: GlobalErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
