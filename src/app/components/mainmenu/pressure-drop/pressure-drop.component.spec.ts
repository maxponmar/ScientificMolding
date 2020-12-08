import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureDropComponent } from './pressure-drop.component';

describe('PressureDropComponent', () => {
  let component: PressureDropComponent;
  let fixture: ComponentFixture<PressureDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressureDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
