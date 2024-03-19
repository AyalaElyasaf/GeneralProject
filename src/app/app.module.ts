import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './Componnets/recipes/recipes.component';
import { AddRecipeComponent } from './Componnets/add-recipe/add-recipe.component';
import { StatisticsComponent } from './Componnets/statistics/statistics.component';
import { NavigationBarComponent } from './Componnets/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

import { RecipePageComponent } from './Componnets/recipe-page/recipe-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHeartComponent } from './Componnets/my-heart/my-heart.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AddRecipeComponent,
    StatisticsComponent,
    NavigationBarComponent,
    RecipePageComponent,
    MyHeartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
