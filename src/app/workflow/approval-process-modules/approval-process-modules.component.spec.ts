import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalProcessModulesComponent } from './approval-process-modules.component';

describe('ApprovalProcessModulesComponent', () => {
  let component: ApprovalProcessModulesComponent;
  let fixture: ComponentFixture<ApprovalProcessModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalProcessModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalProcessModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
