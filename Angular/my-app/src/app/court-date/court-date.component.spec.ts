import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDateComponent } from './court-date.component';

describe('CourtDateComponent', () => {
  let component: CourtDateComponent;
  let fixture: ComponentFixture<CourtDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
