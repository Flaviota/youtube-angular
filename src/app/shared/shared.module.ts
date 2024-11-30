import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top/top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeThumbnailCardComponent } from './components/youtube-thumbnail-card/youtube-thumbnail-card.component';
import { VideoPlayerComponent } from '../views/video-player/video-player.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MenuYouComponent } from './components/sidebar/menu-you/menu-you.component';
import { CardShortComponent } from './components/card-short/card-short.component';

const sharedComponents = [
  TopComponent,
  SidebarComponent,
  YoutubeThumbnailCardComponent,
  VideoPlayerComponent,
  MenuYouComponent,
  CardShortComponent
]

const sharedModules = [
  FormsModule,
  RouterModule,
  HttpClientModule
]

const sharedPipes = [
  SafeUrlPipe,
]

@NgModule({
  declarations: [
    ...sharedComponents,
    ...sharedPipes,
  ],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    ...sharedComponents,
    ...sharedPipes
  ]
})
export class SharedModule { }
