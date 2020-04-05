import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCollectedComponent } from './cash-collected.component';

describe('CashCollectedComponent', () => {
  let component: CashCollectedComponent;
  let fixture: ComponentFixture<CashCollectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashCollectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCollectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
