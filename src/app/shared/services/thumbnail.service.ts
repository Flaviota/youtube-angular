import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {

  private jsonUrl = 'assets/mocks/thumbnails.json';

  constructor(private http: HttpClient) {}

  getThumbnails(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getVideoById(id: string): Observable<any> {
    return this.getThumbnails().pipe(
      map((thumbnails: any[]) => thumbnails.find(video => video.videoId === id))
    );
  }
}
