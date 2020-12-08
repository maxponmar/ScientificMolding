import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavityBalanceComponent } from './cavity-balance.component';

describe('CavityBalanceComponent', () => {
  let component: CavityBalanceComponent;
  let fixture: ComponentFixture<CavityBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavityBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CavityBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
