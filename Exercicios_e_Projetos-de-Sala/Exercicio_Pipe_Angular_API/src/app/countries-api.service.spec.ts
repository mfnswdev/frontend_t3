import { TestBed } from '@angular/core/testing';

import { ApiService } from './countries-api.service';

describe('CountriesAPIService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
