import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalInstancesComponent } from './approval-instances.component';

describe('ApprovalInstancesComponent', () => {
  let component: ApprovalInstancesComponent;
  let fixture: ComponentFixture<ApprovalInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
