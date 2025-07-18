import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatMonthComponent } from './vat-month.component';

describe('VatMonthComponent', () => {
  let component: VatMonthComponent;
  let fixture: ComponentFixture<VatMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
