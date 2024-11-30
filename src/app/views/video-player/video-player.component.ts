import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ThumbnailService } from 'src/app/shared/services/thumbnail.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  video: any;
  videoUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private thumbnailService: ThumbnailService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    if (videoId) {
      this.thumbnailService.getVideoById(videoId).subscribe((videoData) => {
        this.video = videoData;
        this.videoUrl = this.sanitizeUrl(this.video.video.url);
      });
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  extractVideoId(url: string): string {
    const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  }
}
