import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    public ingredientAdded = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        //now a copy of ingredient is shared hence not able to modify the main ingredient obj
        return this.ingredients.slice();
        // return this.ingredients(); //sends the actual copy to the component
        //other method is by informing the component that the new data is available
        //can be done by using event emmiter.
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
    addMultipleIngredients(ingredients: Ingredient[]) {
        // one approach to send one by one 
        // for (let ingredient of ingredients) {
        //     this.addIngredients(ingredient)
        // }

        //Another approach making a list and sending once
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}