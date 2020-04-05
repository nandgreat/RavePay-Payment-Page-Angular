import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgeActivityComponent } from './priviledge-activity.component';

describe('PriviledgeActivityComponent', () => {
  let component: PriviledgeActivityComponent;
  let fixture: ComponentFixture<PriviledgeActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgeActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
