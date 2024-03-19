import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipe.service';
import { StatisticService } from 'src/app/Services/statistic.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent {
  @ViewChild('heartOutline', { static: true }) heartOutline: ElementRef;
  x: boolean = false
  recipes$: Observable<Recipe[]>;
  private sub = new Subscription();
  r: Recipe={
    name: 'aa',
    ingrediens: [],
    Instructions: [],
    Difficulty: 1,
    isFavorite: false
  };

  recipeFormGroup: FormGroup;
  constructor(private recipeService: RecipeService, private fb: FormBuilder, private statisticServ: StatisticService) { }

  ngOnInit(): void {
    this.recipeFormGroup = this.fb.group({
      recipeName: this.fb.control(''),
      level: this.fb.control(''),
      ingredients: this.fb.array([]),
      instructions: this.fb.array([])
    });
    
  }
  get ingredients() {
    return this.recipeFormGroup.get('ingredients') as FormArray;
  }
  get instructions() {
    return this.recipeFormGroup.get('instructions') as FormArray;
  }
  addNewIngredient() {
    this.ingredients.push(this.fb.group({
      ingredient: new FormControl('')
    }));
  }
  addNewInstruction() {
    this.instructions.push(this.fb.group({
      instruction: new FormControl('')
    }));
  }

  isLiked: boolean=false;
  changeFavorite(v:boolean):void{
    this.isLiked=v;
  }
  add() {
    this.r = {
      name: this.recipeFormGroup.get('recipeName').value,
      Difficulty: this.recipeFormGroup.get('level').value,
      isFavorite: this.isLiked,
      ingrediens: this.recipeFormGroup.get('ingredients').value.map((ing: { ingredient: string }) => ing.ingredient),
      Instructions: this.recipeFormGroup.get('instructions').value.map((ins: { instruction: string }) => ins.instruction)
    };
    if (this.recipeFormGroup.get('level').value === 1)
      this.r.isFavorite = true;
    else
      this.r.isFavorite = false;
    this.recipeService.AddRecipe(this.r);
    this.x = true;
    if (this.r.isFavorite)
      this.statisticServ.addLove();
  }


}