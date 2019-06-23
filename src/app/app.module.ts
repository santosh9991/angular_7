import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
@NgModule({
  /*
  ngModel is a decorator which is a angular core feature
  */
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  //This is where app knows where to go get the component and load the html.
  //AppComponent is found in ./app.component
  bootstrap: [AppComponent]
})
export class AppModule { }
