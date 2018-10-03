import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalweekComponent } from './calweek.component';

describe('CalweekComponent', () => {
  let component: CalweekComponent;
  let fixture: ComponentFixture<CalweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
