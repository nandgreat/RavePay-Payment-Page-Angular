import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySummaryComponent } from './today-summary.component';

describe('TodaySummaryComponent', () => {
  let component: TodaySummaryComponent;
  let fixture: ComponentFixture<TodaySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
