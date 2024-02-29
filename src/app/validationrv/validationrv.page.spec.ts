import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationrvPage } from './validationrv.page';

describe('ValidationrvPage', () => {
  let component: ValidationrvPage;
  let fixture: ComponentFixture<ValidationrvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidationrvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
