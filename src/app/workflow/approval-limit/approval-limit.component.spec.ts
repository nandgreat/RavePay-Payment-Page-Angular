import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLimitComponent } from './approval-limit.component';

describe('ApprovalLimitComponent', () => {
  let component: ApprovalLimitComponent;
  let fixture: ComponentFixture<ApprovalLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
