import { TestBed } from '@angular/core/testing';
import { FiltroApiService } from '../Service/filtro-api.service';

describe('FiltroApiService', () => {
  let service: FiltroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
