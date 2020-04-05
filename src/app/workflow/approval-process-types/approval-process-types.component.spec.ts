import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalProcessTypesComponent } from './approval-process-types.component';

describe('ApprovalProcessTypesComponent', () => {
  let component: ApprovalProcessTypesComponent;
  let fixture: ComponentFixture<ApprovalProcessTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalProcessTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalProcessTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
