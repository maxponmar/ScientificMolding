import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateSealComponent } from './gate-seal.component';

describe('GateSealComponent', () => {
  let component: GateSealComponent;
  let fixture: ComponentFixture<GateSealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateSealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
