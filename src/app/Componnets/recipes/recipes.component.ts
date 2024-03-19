import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipe.service';
import { StatisticService } from 'src/app/Services/statistic.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @ViewChild('HeartOutLine', { static: true }) HeartOutLine: ElementRef;
  isFavoritPage: boolean = false;
  x: string = "";
  isFav: string = "0";
  name: string;
  private sub = new Subscription();
  constructor(private recipeServise: RecipeService, private myRoute: ActivatedRoute, private statisticService: StatisticService) { }
  recipes$: Observable<Recipe[]>;
  ngOnInit() {
    this.myRoute.queryParamMap.subscribe(params => { this.isFav = params.get('isF'); })
    if (this.isFav === '0') {
      this.recipes$ = this.recipeServise.Recipes$;
    }
    if (this.isFav === '1') {
      this.recipes$ = this.recipeServise.filterdRecipes$;
    }
    this.sub = this.recipeServise.Recipes$.subscribe();
  }

  DeleteRecipe(r: Recipe) {
    if (!confirm("are you sure?"))
      return;
    if(r.isFavorite)
    this.statisticService.lessLove();
    this.recipeServise.DeleteRecipe(r);
  }

  onView() {
    this.statisticService.addViews();
  }

  onChange(recipe: Recipe): Recipe {
    if (recipe.isFavorite) {
      var x = this.recipeServise.changFavorite(recipe)
      this.statisticService.lessLove();
    }
    else {
      var x = this.recipeServise.changFavorite(recipe)
      this.statisticService.addLove();
    }
    this.ngOnInit()
    return x;
  }
}