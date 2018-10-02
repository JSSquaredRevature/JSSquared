import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLogComponent } from './phone-log.component';

describe('PhoneLogComponent', () => {
  let component: PhoneLogComponent;
  let fixture: ComponentFixture<PhoneLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
