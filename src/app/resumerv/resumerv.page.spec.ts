import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumervPage } from './resumerv.page';

describe('ResumervPage', () => {
  let component: ResumervPage;
  let fixture: ComponentFixture<ResumervPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResumervPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
