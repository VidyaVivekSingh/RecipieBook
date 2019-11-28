// import { Component, OnInit, Output, Input } from '@angular/core';
// import { Recipie } from './recipie.model';
// import { RecipieService } from './recipie.service';

// @Component({
//   selector: 'app-recipies',
//   templateUrl: './recipies.component.html',
//   styleUrls: ['./recipies.component.css'],
// })
// export class RecipiesComponent implements OnInit {

//   constructor() { }
//   @Input() recipieSelected: Recipie;
//   ngOnInit() {
//   }

// }

//After using service
import { Component, OnInit, Output, Input } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {

  constructor(private recipieService: RecipieService) { }
  @Input() recipieSelected: Recipie;
  ngOnInit() {
    this.recipieService.recipieSelected.subscribe(
      (recipie: Recipie) => {
        this.recipieSelected = recipie;
      }
    )
  }

}

