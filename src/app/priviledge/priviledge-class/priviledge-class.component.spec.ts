import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgeClassComponent } from './priviledge-class.component';

describe('PriviledgeClassComponent', () => {
  let component: PriviledgeClassComponent;
  let fixture: ComponentFixture<PriviledgeClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgeClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
