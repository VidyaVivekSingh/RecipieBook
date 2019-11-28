import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';
import { ThrowStmt } from '@angular/compiler';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  
  // before using service all were used

  // @Output() selectedRecipie = new EventEmitter<Recipie>()
  // @Output() recipies: Recipie[] = [
  //   new Recipie('Test1', 'This is a test1 recipie', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  //   new Recipie('Test2', 'This is a test2 recipie', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  // ];

  // after using service
  recipies: Recipie[];
  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipiesList(); 
  }

  // removed after using service

  // onRecipieSelected(recipieComp: Recipie) {
  //   this.selectedRecipie.emit(recipieComp)
  // }

}
