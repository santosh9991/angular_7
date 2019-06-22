// A component is simply a class so that angular can instantiate it based on the blueprint  we create here
//@Component is a decorator which tells ts that it is not a regular class but a component angular class
//decorater enhances the functionality of the class
//As js is not aware of Components, we need to import from @angular/core
import { Component } from '@angular/core'

@Component(
    //configuring the component. Meta data which tells angular what to do wd this meta data
    //selecter:html tag which you are going to use later in app. It should be string, unique
    {selector : 'app-server',
    /*relative path should be specified when templateUrl proprtty is used
    we could also atcheve the same functionality by following inline approach where you specify the html inside ``.
    template:`<h3>inline approach to template definition</h3>`
    */

    templateUrl:'./server.component.html',
    /*
        styles parameter could also br defined with path as follows
        styleUrls:['./server.component.css'], if css is present the current directory
    */
    styles:[`
        .online{
            color:white;
        }
        `
    ]
    })
export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline';
    constructor(){
        //constructor is loaded first before rest of the ServeComponent code. It is called as soon as the component is called
        this.serverStatus = Math.random()>0.5?'online' : 'offline'
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==="online"?"blue":"red";
    }
}