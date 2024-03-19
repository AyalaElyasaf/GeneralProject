import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './Componnets/recipes/recipes.component';
import { AddRecipeComponent } from './Componnets/add-recipe/add-recipe.component';
import { RecipePageComponent } from './Componnets/recipe-page/recipe-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'Favorit',
    component: RecipesComponent,
  },
  { path: 'specificRecipe/:name', component: RecipePageComponent },
  {
    path: 'add',
    component: AddRecipeComponent,
  }
  ,
  {
    path: 'recipePage',
    component: RecipePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
