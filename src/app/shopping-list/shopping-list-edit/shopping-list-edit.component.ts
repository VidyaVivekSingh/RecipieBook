// import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
// import { Ingredient } from 'src/app/shared/ingredient.model';

// @Component({
//   selector: 'app-shopping-list-edit',
//   templateUrl: './shopping-list-edit.component.html',
//   styleUrls: ['./shopping-list-edit.component.css']
// })
// export class ShoppingListEditComponent implements OnInit {
//   @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
//   @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

//   @Output() isIngredientAdded = new EventEmitter<Ingredient>();
//   constructor() { }

//   onAdd(name,amount) {
//     const ingName= this.nameInputRef.nativeElement.value;
//     const ingAmount= this.amountInputRef.nativeElement.value;
//     const ing=new Ingredient(ingName,ingAmount)
    
//     this.isIngredientAdded.emit(ing)
//     // this.isIngredientAdded.emit({name:name.value,amount:amount.value})
//   }

//   ngOnInit() {
//   }

// }


// After using Service

import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService:ShoppingListService) { }

  onAdd(name,amount) {
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const ing=new Ingredient(ingName,ingAmount);
    this.slService.addIngredients(ing)
  }

  ngOnInit() {

  }

}
