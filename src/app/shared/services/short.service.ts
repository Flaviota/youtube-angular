import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortService {
  private jsonURL = 'assets/mocks/shorts.json';

  constructor(private http: HttpClient) {}

  getShorts(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
