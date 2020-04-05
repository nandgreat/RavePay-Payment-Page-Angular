import { TestBed } from '@angular/core/testing';

import { SalesReceipt } from './sales-receipt.service';

describe('SalesReceiptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesReceipt = TestBed.get(SalesReceipt);
    expect(service).toBeTruthy();
  });
});
