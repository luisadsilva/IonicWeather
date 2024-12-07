import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablPage } from './tabl.page';

describe('TablPage', () => {
  let component: TablPage;
  let fixture: ComponentFixture<TablPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
