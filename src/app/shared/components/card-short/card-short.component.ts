import { Component, OnInit } from '@angular/core';
import { ShortService } from '../../services/short.service';

@Component({
  selector: 'app-card-short',
  templateUrl: './card-short.component.html',
  styleUrls: ['./card-short.component.scss']
})
export class CardShortComponent implements OnInit {
  shorts: any[] = [];
  isPlaying = false;
  isModalOpen = false;
  selectedShort: any = null;
  isMenuOpen = false;

  constructor(private shortService: ShortService) {}

  ngOnInit(): void {
    this.shortService.getShorts().subscribe((data) => {
      this.shorts = data;
    });
  }

  playVideo(video: HTMLVideoElement): void {
    video.style.display = 'block';
    video.play();
    this.isPlaying = true;
  }

  pauseVideo(video: HTMLVideoElement): void {
    video.pause();
    video.style.display = 'none';
    this.isPlaying = false;
  }

  toggleVideo(video: HTMLVideoElement): void {
    if (this.isPlaying) {
      this.pauseVideo(video);
    } else {
      this.playVideo(video);
    }
  }

  openModal(short: any): void {
    this.selectedShort = short;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedShort = null;
  }

  openFullscreen(videoElement: HTMLVideoElement): void {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) { /* Safari */
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).msRequestFullscreen) { /* IE11 */
      (videoElement as any).msRequestFullscreen();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;  // Alterna entre true e false
  }
}
