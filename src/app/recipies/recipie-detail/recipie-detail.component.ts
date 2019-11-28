import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  constructor(private recipieServie: RecipieService) { }

  @Input() recipieWasSelected: Recipie;
  ngOnInit() {
  }
  onAddToShoppingList() {
    this.recipieServie.addIngredientsToShoppingList(this.recipieWasSelected.ingredients)
  }
  onEdit() {

  }
  onDelete() {

  }

}
