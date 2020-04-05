import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSuccessComponent } from './approval-success.component';

describe('ApprovalSuccessComponent', () => {
  let component: ApprovalSuccessComponent;
  let fixture: ComponentFixture<ApprovalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
