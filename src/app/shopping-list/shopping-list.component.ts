// import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';

// @Component({
//   selector: 'app-shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.css']
// })
// export class ShoppingListComponent implements OnInit {
//   ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10)
//   ];
//   constructor() { }
//   onIngredientAdded(element: Ingredient) {
//     this.ingredients.push(element);
//   }

//   ngOnInit() {
//   }

// }

//After using Service

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientAdded.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient
    })
  }

}
