import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurervPage } from './durerv.page';

describe('DurervPage', () => {
  let component: DurervPage;
  let fixture: ComponentFixture<DurervPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DurervPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
