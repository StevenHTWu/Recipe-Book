import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=45&crop=9px%2C2330px%2C5697px%2C2451px&resize=1880%2C799',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=45&crop=9px%2C2330px%2C5697px%2C2451px&resize=1880%2C799',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // only get copy, without slice() its a reference
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
