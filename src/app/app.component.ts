import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Here we load the core component object and selector is available to index.html
export class AppComponent {
  feature:string;
  features(featureValue:string){
        this.feature=featureValue
        console.log("app component",featureValue)
  }

}

