import { Component, EventEmitter, Output} from '@angular/core';


@Component({
    //selector helps us use this component
    selector:'app-header',
    templateUrl:'./header.component.html'
}
)
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature:string){
        this.featureSelected.emit(feature)
        console.log("header",feature)
    }
}