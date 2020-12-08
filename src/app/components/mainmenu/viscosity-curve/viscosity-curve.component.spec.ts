import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViscosityCurveComponent } from './viscosity-curve.component';

describe('ViscosityCurveComponent', () => {
  let component: ViscosityCurveComponent;
  let fixture: ComponentFixture<ViscosityCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViscosityCurveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViscosityCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
