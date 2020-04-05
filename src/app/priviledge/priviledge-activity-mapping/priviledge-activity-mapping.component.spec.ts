import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgeActivityMappingComponent } from './priviledge-activity-mapping.component';

describe('PriviledgeActivityMappingComponent', () => {
  let component: PriviledgeActivityMappingComponent;
  let fixture: ComponentFixture<PriviledgeActivityMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgeActivityMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgeActivityMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
