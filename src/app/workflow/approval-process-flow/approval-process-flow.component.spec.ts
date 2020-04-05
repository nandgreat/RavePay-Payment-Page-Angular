import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalProcessFlowComponent } from './approval-process-flow.component';

describe('ApprovalProcessFlowComponent', () => {
  let component: ApprovalProcessFlowComponent;
  let fixture: ComponentFixture<ApprovalProcessFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalProcessFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalProcessFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
