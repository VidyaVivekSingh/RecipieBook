import { Recipie } from './recipie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipieService {

    recipieSelected = new EventEmitter<Recipie>();
    private recipies: Recipie[] = [
        new Recipie('Chicken',
            'This is a Non-Veg recipie',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.668xw:1.00xh;0.0513xw,0&resize=640:*',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Butter', 1)
            ]),
        new Recipie('Paneer',
            'This is a Veg, recipie',
            'https://wbcdn.in/assets/img/uploads/cache/recipe_inline/2018/nov/img_f0ac71632ec777a1141671ad479e422734d46d3c_930_.jpg',
            [new Ingredient('Paneer', 1),
            new Ingredient('Onion', 1),
            new Ingredient('Butter', 1)])
    ];
    constructor(private slService: ShoppingListService) { }
    getRecipiesList() {
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addMultipleIngredients(ingredients)
    }
}