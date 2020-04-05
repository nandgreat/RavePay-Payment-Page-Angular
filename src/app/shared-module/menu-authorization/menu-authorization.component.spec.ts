import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuthorizationComponent } from './menu-authorization.component';

describe('MenuAuthorizationComponent', () => {
  let component: MenuAuthorizationComponent;
  let fixture: ComponentFixture<MenuAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
