import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCollectedHistoryComponent } from './cash-collected-history.component';

describe('CashCollectedHistoryComponent', () => {
  let component: CashCollectedHistoryComponent;
  let fixture: ComponentFixture<CashCollectedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashCollectedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCollectedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
