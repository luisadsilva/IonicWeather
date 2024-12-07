import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabcPage } from './tabc.page';

describe('TabcPage', () => {
  let component: TabcPage;
  let fixture: ComponentFixture<TabcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
