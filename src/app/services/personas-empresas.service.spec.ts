import { TestBed } from '@angular/core/testing';

import { PersonasEmpresasService } from './personas-empresas.service';

describe('PersonasEmpresasService', () => {
  let service: PersonasEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
