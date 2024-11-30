import { Component, OnInit } from '@angular/core';
import { ThumbnailService } from 'src/app/shared/services/thumbnail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  thumbnails: any[] = [];

  constructor(private thumbnailService: ThumbnailService) {}

  ngOnInit(): void {
    this.thumbnailService.getThumbnails().subscribe((data) => {
      this.thumbnails = data;
    });
  }
}
