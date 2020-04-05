import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionChargesComponent } from './transaction-charges.component';

describe('TransactionChargesComponent', () => {
  let component: TransactionChargesComponent;
  let fixture: ComponentFixture<TransactionChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
