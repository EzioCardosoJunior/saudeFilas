import { TestBed } from '@angular/core/testing';

import { ConsultaFilasService } from './consulta-filas.service';

describe('ConsultaFilasService', () => {
  let service: ConsultaFilasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaFilasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
