import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  //This is where app knows where to go get the component and load the html.
  //AppComponent is found in ./app.component
  bootstrap: [AppComponent]
})
export class AppModule { }
