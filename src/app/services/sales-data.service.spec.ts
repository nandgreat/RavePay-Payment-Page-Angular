import { TestBed } from '@angular/core/testing';

import { SalesData } from './sales-data.service';

describe('SalesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesData = TestBed.get(SalesData);
    expect(service).toBeTruthy();
  });
});
