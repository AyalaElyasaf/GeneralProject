import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';

@Component({
  selector: 'app-my-heart',
  templateUrl: './my-heart.component.html',
  styleUrls: ['./my-heart.component.scss']
})
export class MyHeartComponent {
  @Output() changeLikeEvevnt = new EventEmitter<boolean>();
  isLiked: boolean;//=this.recipe1.isFavorite;
  @Input() recipe1: Recipe;

  constructor() { }
  ngOnInit() {
    if (this.recipe1.isFavorite)
      this.isLiked = true;
    else
      this.isLiked = false;
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.changeLikeEvevnt.emit(this.isLiked);
  }
}
