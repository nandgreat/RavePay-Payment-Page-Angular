import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgeAssignmentComponent } from './priviledge-assignment.component';

describe('PriviledgeAssignmentComponent', () => {
  let component: PriviledgeAssignmentComponent;
  let fixture: ComponentFixture<PriviledgeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
