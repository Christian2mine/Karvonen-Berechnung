import { TestBed } from '@angular/core/testing';

import { ErgebnisService } from './ergebnis.service';

describe('ErgebnisService', () => {
  let service: ErgebnisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErgebnisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
