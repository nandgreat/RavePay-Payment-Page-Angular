import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuthorizedComponent } from './menu-authorized.component';

describe('MenuAuthorizedComponent', () => {
  let component: MenuAuthorizedComponent;
  let fixture: ComponentFixture<MenuAuthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAuthorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
