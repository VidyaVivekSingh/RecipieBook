// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Recipie } from '../../recipie.model';

// @Component({
//   selector: 'app-recipie-item',
//   templateUrl: './recipie-item.component.html',
//   styleUrls: ['./recipie-item.component.css']
// })
// export class RecipieItemComponent implements OnInit {

//   // { name: string, description: 'string', imageUrl: string }
//   constructor() { }
//   @Input() recipie: Recipie;
//   @Output() recipieSelect = new EventEmitter<void>();

//   onSelect(recipieSelected: Recipie) {
//     this.recipieSelect.emit();
//   }
//   ngOnInit() {
//   }

// }

//After using Service

import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  // { name: string, description: 'string', imageUrl: string }
  constructor(private recipieService:RecipieService) { }
  @Input() recipie: Recipie;

  onSelect(recipieSelected: Recipie) {
    this.recipieService.recipieSelected.emit(this.recipie)
  }
  ngOnInit() {
  }

}

