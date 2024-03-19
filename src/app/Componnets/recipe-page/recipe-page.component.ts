import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipe.service';
import { StatisticService } from 'src/app/Services/statistic.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  @ViewChild('HeartOutLines', { static: true }) HeartOutLines: ElementRef;
  recipe: Recipe;
  ingrediens: string[];
  instructions: string[];

  constructor(private route: ActivatedRoute, private service: RecipeService, private statisticService: StatisticService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let recipeName = params['name'];
      this.recipe = this.service.getRecipeByName(recipeName);
      this.ingrediens = this.recipe.ingrediens;
      this.instructions = this.recipe.Instructions;
    });
  }

  onChange(recipe: Recipe): Recipe {

    if (recipe.isFavorite) {
      var x = this.service.changFavorite(recipe)
      this.statisticService.lessLove();
    }
    else {
      var x = this.service.changFavorite(recipe)
      this.statisticService.addLove();
    }
    this.ngOnInit()
    return x;
  }
}
