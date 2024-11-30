import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYouComponent } from './menu-you.component';

describe('MenuYouComponent', () => {
  let component: MenuYouComponent;
  let fixture: ComponentFixture<MenuYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
