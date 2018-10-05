import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalexComponent } from './calex.component';

describe('CalexComponent', () => {
  let component: CalexComponent;
  let fixture: ComponentFixture<CalexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
