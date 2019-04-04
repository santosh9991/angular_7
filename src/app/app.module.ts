import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
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
