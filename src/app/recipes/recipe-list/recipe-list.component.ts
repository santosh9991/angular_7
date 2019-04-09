import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //declare recipes 
  recipes:Recipe[]=[
    new Recipe("Chicken Curry","Please follow below steps to make chiken curry:\
      Step1: Pre heat the pan and add oli.\
      Step2: Add cardimon,cloves,flower, and other flavours.\
      Step3: Add chopped Onion.\
      Step4: Add marinated Chiken.\
      Step5: Cook chicken in high flame for 40 min and low flame for 20 min.\
      Step6: Add coriander leaves at the end.\
      Step7: Chicken ready","https://irepo.primecp.com/2016/03/269040/recipe-21051_Large400_ID-1523870.jpg?v=1523870"),
    new Recipe("Chicken Salad","Please follow below steps to make Chicken Salad:\
      Step1: Peel the avacado and slice into four pices.\
      Step2: Cut spinach,latice,and other vegitables as need.\
      Step3: Mix every thing to geather.\
      Step4: Marinate the Chicken and roast or bake in oven.\
      Step5: Cut the chicken and add it to the mixture.\
      Step6: Add salt and papper to the mixture as desired.\
      Step7: Serve in the bowl and enjoy","https://gimmedelicious.com/wp-content/uploads/2017/04/chicken-and-avocdo-salad-greek.jpg")
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
