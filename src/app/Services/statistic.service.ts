import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private recipeService: RecipeService) { 
  this.firstLovedFunc();
}
  views: BehaviorSubject<number> = new BehaviorSubject<number>(12);
  get views$(): Observable<number> {
    return this.views.asObservable();
  }
  firstLoves: number;
  firstLovedFunc() {
    this.firstLoves = this.recipeService.firstLove();
    this.loves.next(this.firstLoves) ;
  }
  loves: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get loves$(): Observable<number> {
    return this.loves.asObservable();
  }

  addViews() {
    this.views.next(this.views.getValue() + 1);
  }
  addLove() {
    this.loves.next(this.loves.getValue() + 1);
  }
  lessLove() {
    this.loves.next(this.loves.getValue() - 1);
  }
}
