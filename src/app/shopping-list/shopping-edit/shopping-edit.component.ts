import { Component, OnInit, ViewChild, ElementRef, EventEmitter, 
  Output,OnChanges,
SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnChanges {
  @ViewChild("nameInput") nameInputRef:ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  //ingredientAdded is an event emitter which emits an event when an ingredient is added 

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { 
      console.log("constructor")
  }
  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("on changes")
    console.log(changes)
  }
  
  onAddItem(){
    const ingNam = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInputRef.nativeElement.value
    const ingValue = new Ingredient(ingNam,amountValue)
    this.ingredientAdded.emit(ingValue);
    
  }
}
