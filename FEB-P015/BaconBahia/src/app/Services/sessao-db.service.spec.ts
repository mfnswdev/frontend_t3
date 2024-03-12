import { TestBed } from '@angular/core/testing';

import { SessaoDBService } from './sessao-db.service';

describe('SessaoDBService', () => {
  let service: SessaoDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessaoDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
