import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalagendaComponent } from './calagenda.component';

describe('CalagendaComponent', () => {
  let component: CalagendaComponent;
  let fixture: ComponentFixture<CalagendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalagendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
