import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticProcessWindowComponent } from './cosmetic-process-window.component';

describe('CosmeticProcessWindowComponent', () => {
  let component: CosmeticProcessWindowComponent;
  let fixture: ComponentFixture<CosmeticProcessWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmeticProcessWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticProcessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
