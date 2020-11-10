import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class XkcdService {
  random: number = 0;
  constructor(private http: HttpClient) {}
  obtenerComic() {
    return this.http
      .get(`/api/${this.randomizar()}/info.0.json`)
      .toPromise();
  }
  randomizar() {
    return Number.parseInt((Math.random() * (2382 - 0) + 0).toString());
  }
}
