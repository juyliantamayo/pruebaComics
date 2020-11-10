import { Component, OnInit } from '@angular/core';
import { XkcdService } from 'src/app/services/xkcd/xkcd.service';
import { StarRatingColor } from '../calificador/calificador.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  rating: number = 0;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  title: string = '';
  srcImage: string = '';
  mostarContenido = false;
  constructor(private service: XkcdService) {}

  ngOnInit(): void {
    this.service.obtenerComic().then((data) => {
      this.srcImage = data['img'];
      this.title = data['title'];
      this.mostarContenido = true;
    });
  }
  onRatingChanged(rating) {
    this.rating = rating;
  }
  onComicChange() {
    this.rating = 0;
    this.mostarContenido = false;
    this.service.obtenerComic().then((data) => {
      this.srcImage = data['img'];
      this.title = data['title'];
      this.mostarContenido = true;
    });
  }
}
