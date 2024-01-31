import { TestBed } from '@angular/core/testing';

import { BuscarArtigoService } from './buscar-artigo.service';

describe('BuscarArtigoService', () => {
  let service: BuscarArtigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarArtigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
