import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayementrvPage } from './payementrv.page';

describe('PayementrvPage', () => {
  let component: PayementrvPage;
  let fixture: ComponentFixture<PayementrvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayementrvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
