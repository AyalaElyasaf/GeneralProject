
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  get Recipes$(): Observable<Recipe[]> {
    return this.recipes.asObservable();
  }
  get filterdRecipes$(): Observable<Recipe[]> {
    return of(this.recipes.getValue().filter(r => (r.isFavorite === true)));
  }

  AddRecipe(NewRecipe: Recipe): void {
    const oldRecipes = this.recipes.getValue();
    this.recipes.next([...oldRecipes, NewRecipe]);
  }


  DeleteRecipe(recipeToDelete: Recipe): void {
    this.recipes.next(this.recipes.getValue().filter(r => (r !== recipeToDelete)));
  }
  getRecipeByName(n: string): Recipe {

    return this.recipes.getValue().find(r => r.name === n);
  }
  f: number
  firstLove() {
    //this.recipes.getValue().map(r=>r.isFavorite).forEach(r=>r?this.f++:null)
    this.f = this.recipes.getValue().filter(r => r.isFavorite).length;
    //console.log(this.f);    
    return this.f;
  }
  changFavorite(r: Recipe): Recipe {
    var newR = this.recipes.value.find(rec => rec === r);
    newR.isFavorite = !newR.isFavorite;
    return newR;
  }

  //#region אתחול רשימת מתכונים
  private recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>(
    [{
      name: 'Chocolate balls',
      ingrediens: ['biscuits', 'sugar', 'cocoa', 'vanila', 'oil', 'water', 'coconut', 'sprinkles'],
      Instructions: ['crush the biscuits',
        'heat the rest of the ingredients in a pot on the fire',
        'add the biscuits',
        'Make balls and decorate'],
      Difficulty: 1,
      isFavorite: true
    },
    {
      name: 'Vegetable soup',
      ingrediens: ['potatos', 'carrots', 'onions', 'garlic', 'oil', 'water', 'salt', 'black pepper', 'Seasoning for soup'],
      Instructions: ['cut all the vegetables into squares',
        'Put the cut vegetables in the pot and cover with water',
        'After boiling, season the soup',
        'Wait until the vegetables soften'],
      Difficulty: 2,
      isFavorite: true
    },
    {
      name: 'Belgian Waffles',
      ingrediens: ['flour', 'suger', 'vanila', 'milk', 'oil', 'eggs', 'Baking powder'],
      Instructions: ['mix all the ingrediens',
        'put oil on the device',
        'pour a full spoon each time',
        'When ready to take out',
        'Indulge in extras'],
      Difficulty: 3,
      isFavorite: true
    },
    {
      name: "Cacho Ah Pepe Pasta",
      Difficulty: 1,
      isFavorite: true,
      ingrediens: ["Spaghetti", "salt", "Parmesan Cheese", "Black Pepper"],
      Instructions: ["Cook spaghetti al dente",  "Mix water, cheese, and pepper in a bowl", "Combine all ingredients and mix well"]
  },
  {
      name: "Chicken Stir-Fry",
      Difficulty: 1,
      isFavorite: true,
      ingrediens: ["Chicken Breast", "Bell Peppers", "Broccoli", "Soy Sauce", "Ginger", "Garlic"],
      Instructions: ["Slice chicken and vegetables", "Stir-fry chicken until cooked", "Add vegetables and sauce, stir until tender"]
  },
  {
    name: "Classic Chocolate Chip Cookies",
    Difficulty: 2,
    isFavorite: true,
    ingrediens: ["Flour", "Sugar", "Butter", "Chocolate Chips", "Eggs", "Vanilla Extract"],
    Instructions: ["Preheat oven to 350°F", "Mix dry ingredients in a bowl", "Cream butter and sugar, add eggs and vanilla", "Combine dry and wet ingredients, fold in chocolate chips", "Scoop dough onto baking sheet, bake for 10-12 minutes"]
},
{
  name: "Vegetarian Chili",
  Difficulty: 3,
  isFavorite: true,
  ingrediens: ["Beans", "Tomatoes", "Bell Peppers", "Onion", "Garlic", "Chili Powder"],
  Instructions: ["Saute onions and garlic", "Add bell peppers and tomatoes, simmer", "Add beans and seasonings, cook until flavors meld"]
},
{
  name: "Mushroom Risotto",
  Difficulty: 3,
  isFavorite: true,
  ingrediens: ["Arborio Rice", "Mushrooms", "Vegetable Broth", "Parmesan Cheese", "Onion", "White Wine"],
  Instructions: ["Saute mushrooms and onions", "Add rice, deglaze with wine", "Gradually add broth, stirring until creamy", "Finish with cheese and seasonings"]
},
{
  name: "Pesto Pasta",
  Difficulty: 1,
  isFavorite: true,
  ingrediens: ["Pasta", "Basil Pesto", "Cherry Tomatoes", "Parmesan Cheese"],
  Instructions: ["Cook pasta al dente", "Toss with pesto and halved tomatoes", "Top with grated cheese before serving"]
},
{
  name: "Grilled Salmon",
  Difficulty: 2,
  isFavorite: true,
  ingrediens: ["Salmon Fillets", "Lemon", "Olive Oil", "Dill", "Garlic"],
  Instructions: ["Marinate salmon in lemon, oil, and herbs", "Grill until cooked through, about 4 minutes per side"]
}
    ]);
  //#endregion


}





