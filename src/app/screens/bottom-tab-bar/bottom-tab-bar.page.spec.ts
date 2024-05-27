import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomTabBarPage } from './bottom-tab-bar.page';

describe('BottomTabBarPage', () => {
  let component: BottomTabBarPage;
  let fixture: ComponentFixture<BottomTabBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BottomTabBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
