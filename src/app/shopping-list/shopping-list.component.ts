import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",5),

  ]
  constructor() { }

  ngOnInit() {
  }
  //omIngredientAdded method receives an ingredient object that has name and ammount property
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    // console.log(this.ingredients)

  }
}
