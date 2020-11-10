import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calificador',
  templateUrl: './calificador.component.html',
  styleUrls: ['./calificador.component.css'],
})
export class CalificadorComponent implements OnInit {
  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'accent';
  @Output() ratingUpdated = new EventEmitter();
  @Output() comicUpdate = new EventEmitter();
  snackBarDuration: number = 2000;
  ratingArr = [];

  constructor() {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
    return false;
  }
  onClickNext() {
    this.comicUpdate.emit();
    return;
  }
  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn',
}
