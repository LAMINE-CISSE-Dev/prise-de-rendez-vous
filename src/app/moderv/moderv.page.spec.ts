import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModervPage } from './moderv.page';

describe('ModervPage', () => {
  let component: ModervPage;
  let fixture: ComponentFixture<ModervPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModervPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
