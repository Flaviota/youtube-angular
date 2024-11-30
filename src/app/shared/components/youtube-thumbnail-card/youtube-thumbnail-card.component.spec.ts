import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeThumbnailCardComponent } from './youtube-thumbnail-card.component';

describe('YoutubeThumbnailCardComponent', () => {
  let component: YoutubeThumbnailCardComponent;
  let fixture: ComponentFixture<YoutubeThumbnailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeThumbnailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeThumbnailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
