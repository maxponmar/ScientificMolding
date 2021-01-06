import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingTimeComponent } from './cooling-time.component';

describe('CoolingTimeComponent', () => {
  let component: CoolingTimeComponent;
  let fixture: ComponentFixture<CoolingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
