import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShortComponent } from './card-short.component';

describe('CardShortComponent', () => {
  let component: CardShortComponent;
  let fixture: ComponentFixture<CardShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
