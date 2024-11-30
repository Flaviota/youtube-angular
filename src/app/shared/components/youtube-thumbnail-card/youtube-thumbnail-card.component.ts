import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youtube-thumbnail-card',
  templateUrl: './youtube-thumbnail-card.component.html',
  styleUrls: ['./youtube-thumbnail-card.component.scss']
})
export class YoutubeThumbnailCardComponent {
  @Input() thumbnailUrl!: string;
  @Input() title!: string;
  @Input() channelName!: string;
  @Input() views!: number;
  @Input() uploadTime!: string;
  @Input() duration!: string;
  @Input() channelIconUrl!: string;
  @Input() video!: { url: string; description: string; likes: number; dislikes: number; commentsCount: number };
  @Input() videoId!: string;
}
